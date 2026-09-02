import { NextResponse } from "next/server";
import ICAL from "ical.js";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/ical/b28b92360cf48175f3696a289ecf3033f1ae016cb987814c61c0e3c1c83ebf38%40group.calendar.google.com/public/basic.ics";

export async function GET() {
  try {
    const response = await fetch(CALENDAR_URL, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to retrieve Google Calendar");
    }

    const icsData = await response.text();

    const jcalData = ICAL.parse(icsData);
    const calendar = new ICAL.Component(jcalData);
    const events = calendar.getAllSubcomponents("vevent");

    const calendarEvents = events.map((event) => {
      const vevent = new ICAL.Event(event);

      return {
        id: vevent.uid,
        title: vevent.summary || "Penkridge Dog Services",
        start: vevent.startDate.toJSDate().toISOString(),
        end: vevent.endDate.toJSDate().toISOString(),
        description: vevent.description || "",
      };
    });

    return NextResponse.json(calendarEvents);
  } catch (error) {
    console.error("Calendar error:", error);

    return NextResponse.json(
      {
        error: "Unable to load calendar",
      },
      {
        status: 500,
      }
    );
  }
}
