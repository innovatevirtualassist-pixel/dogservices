"use client";

import { useEffect, useMemo, useState } from "react";

type EventType =
  | "available"
  | "limited"
  | "booked"
  | "social"
  | "event"
  | "other";

type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  description?: string;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEK_DAYS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

function getEventType(title: string): EventType {
  const value = title.trim().toUpperCase();

  switch (value) {
    case "AVAILABLE":
      return "available";

    case "LIMITED":
      return "limited";

    case "BOOKED":
      return "booked";

    case "SOCIAL WALK":
      return "social";

    case "EVENT":
      return "event";

    default:
      return "other";
  }
}

function formatDateKey(
  year: number,
  month: number,
  day: number
) {
  return `${year}-${String(month + 1).padStart(
    2,
    "0"
  )}-${String(day).padStart(2, "0")}`;
}

function getDateKey(date: Date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(
    2,
    "0"
  )}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();

  // Monday = 0
  return day === 0 ? 6 : day - 1;
}

function getStatus(events: CalendarEvent[]): EventType {
  const types = events.map((event) =>
    getEventType(event.title)
  );

  // BOOKED always takes priority
  if (types.includes("booked")) {
    return "booked";
  }

  if (types.includes("limited")) {
    return "limited";
  }

  if (types.includes("available")) {
    return "available";
  }

  if (types.includes("social")) {
    return "social";
  }

  if (types.includes("event")) {
    return "event";
  }

  return "other";
}

function statusLabel(type: EventType) {
  switch (type) {
    case "available":
      return "Available";

    case "limited":
      return "Limited";

    case "booked":
      return "Fully booked";

    case "social":
      return "Social walk";

    case "event":
      return "Event";

    default:
      return "Event";
  }
}

function statusDot(type: EventType) {
  switch (type) {
    case "available":
      return "bg-green-500";

    case "limited":
      return "bg-yellow-400";

    case "booked":
      return "bg-red-500";

    case "social":
      return "bg-purple-500";

    case "event":
      return "bg-blue-500";

    default:
      return "bg-gray-400";
  }
}

function formatSelectedDate(date: string) {
  return new Date(
    `${date}T12:00:00`
  ).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InteractiveCalendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    today.getMonth()
  );

  const [currentYear, setCurrentYear] = useState(
    today.getFullYear()
  );

  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const [selectedDate, setSelectedDate] = useState<
    string | null
  >(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  /*
   * Load Google Calendar events through our
   * Next.js API route.
   */
  useEffect(() => {
    async function loadCalendar() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/calendar", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Calendar failed to load");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid calendar data");
        }

        setEvents(data);
      } catch (err) {
        console.error("Calendar error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadCalendar();
  }, []);

  /*
   * Group events by date.
   */
  const eventsByDate = useMemo(() => {
    const grouped: Record<
      string,
      CalendarEvent[]
    > = {};

    events.forEach((event) => {
      const startDate = new Date(event.start);

      if (Number.isNaN(startDate.getTime())) {
        return;
      }

      const dateKey = getDateKey(startDate);

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(event);
    });

    return grouped;
  }, [events]);

  const daysInMonth = getDaysInMonth(
    currentYear,
    currentMonth
  );

  const firstDay = getFirstDayOfMonth(
    currentYear,
    currentMonth
  );

  const calendarDays: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  function previousMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((year) => year - 1);
    } else {
      setCurrentMonth((month) => month - 1);
    }

    setSelectedDate(null);
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((year) => year + 1);
    } else {
      setCurrentMonth((month) => month + 1);
    }

    setSelectedDate(null);
  }

  function goToToday() {
    const now = new Date();

    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
    setSelectedDate(getDateKey(now));
  }

  const selectedEvents = selectedDate
    ? eventsByDate[selectedDate] || []
    : [];

  const selectedStatus = getStatus(selectedEvents);

  const enquiryUrl = selectedDate
    ? `/contact?date=${encodeURIComponent(
        selectedDate
      )}`
    : "/contact";

  return (
    <div className="space-y-8">

      {/* Calendar */}
      <section className="rounded-3xl border shadow-lg overflow-hidden bg-white">

        {/* Calendar header */}
        <div className="p-5 md:p-7 border-b">

          <div className="flex items-center justify-between gap-3">

            <button
              type="button"
              onClick={previousMonth}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Previous month"
            >
              ←
            </button>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {MONTHS[currentMonth]} {currentYear}
              </h2>

              <button
                type="button"
                onClick={goToToday}
                className="text-sm mt-1 underline opacity-70 hover:opacity-100"
              >
                Today
              </button>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Next month"
            >
              →
            </button>

          </div>

        </div>

        {/* Legend */}
        <div className="px-5 md:px-7 py-4 border-b">

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Available
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              Limited
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              Booked
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              Social walk
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Event
            </div>

          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="p-12 text-center">
            <div className="text-3xl mb-3">🐾</div>
            <p>Loading availability...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="p-10 text-center">

            <div className="text-3xl mb-3">🐾</div>

            <h3 className="font-semibold text-lg mb-2">
              Calendar temporarily unavailable
            </h3>

            <p className="text-sm mb-5">
              Please contact us directly and we'll be
              happy to check availability for you.
            </p>

            <a
              href="/contact"
              className="inline-flex rounded-full border px-6 py-3 font-semibold hover:shadow-md transition"
            >
              Send an enquiry
            </a>

          </div>
        )}

        {/* Calendar grid */}
        {!loading && !error && (
          <div className="p-3 md:p-7">

            {/* Weekdays */}
            <div className="grid grid-cols-7 mb-2">

              {WEEK_DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs md:text-sm font-semibold py-3 opacity-70"
                >
                  {day}
                </div>
              ))}

            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1 md:gap-2">

              {calendarDays.map((day, index) => {

                if (day === null) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="min-h-20 md:min-h-28"
                    />
                  );
                }

                const dateKey = formatDateKey(
                  currentYear,
                  currentMonth,
                  day
                );

                const dayEvents =
                  eventsByDate[dateKey] || [];

                const type = getStatus(dayEvents);

                const isSelected =
                  selectedDate === dateKey;

                const isToday =
                  dateKey === getDateKey(today);

                return (
                  <button
                    key={dateKey}
                    type="button"
                    onClick={() =>
                      setSelectedDate(dateKey)
                    }
                    className={`
                      min-h-20 md:min-h-28
                      rounded-xl
                      border
                      p-2
                      md:p-3
                      text-left
                      transition
                      hover:shadow-md
                      hover:-translate-y-0.5
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      ${
                        isSelected
                          ? "ring-2 ring-offset-2"
                          : ""
                      }
                    `}
                    aria-label={`${day} ${MONTHS[currentMonth]} ${currentYear}`}
                  >

                    {/* Day number */}
                    <div
                      className={`
                        inline-flex
                        items-center
                        justify-center
                        w-7
                        h-7
                        rounded-full
                        font-semibold
                        ${
                          isToday
                            ? "border-2"
                            : ""
                        }
                      `}
                    >
                      {day}
                    </div>

                    {/* Status */}
                    {dayEvents.length > 0 && (
                      <div className="mt-2">

                        <div className="flex items-center gap-1">

                          <span
                            className={`
                              w-3
                              h-3
                              rounded-full
                              shrink-0
                              ${statusDot(type)}
                            `}
                          />

                          <span className="hidden md:inline text-xs font-medium">
                            {statusLabel(type)}
                          </span>

                        </div>

                        {/* Event title */}
                        <div className="hidden md:block mt-2">

                          {dayEvents
                            .slice(0, 2)
                            .map((event) => (
                              <div
                                key={event.id}
                                className="text-xs truncate opacity-75"
                              >
                                {event.title}
                              </div>
                            ))}

                        </div>

                      </div>
                    )}

                  </button>
                );
              })}

            </div>

          </div>
        )}

      </section>

      {/* Selected date */}
      {selectedDate && (
        <section className="rounded-3xl border shadow-lg p-6 md:p-8">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>

              <div className="flex items-center gap-3 mb-3">

                <span
                  className={`
                    w-4
                    h-4
                    rounded-full
                    ${statusDot(selectedStatus)}
                  `}
                />

                <span className="font-semibold">
                  {statusLabel(selectedStatus)}
                </span>

              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {formatSelectedDate(selectedDate)}
              </h3>

              {selectedEvents.length > 0 ? (
                <div className="space-y-4">

                  {selectedEvents.map((event) => {

                    const type = getEventType(
                      event.title
                    );

                    return (
                      <div
                        key={event.id}
                        className="rounded-2xl border p-4"
                      >

                        <div className="flex items-center gap-2 font-semibold mb-2">

                          <span>
                            {type === "social"
                              ? "🐾"
                              : type === "event"
                              ? "📅"
                              : "🐶"}
                          </span>

                          <span>
                            {event.title}
                          </span>

                        </div>

                        {event.description && (
                          <p className="text-sm leading-relaxed whitespace-pre-line">
                            {event.description}
                          </p>
                        )}

                      </div>
                    );
                  })}

                </div>
              ) : (
                <p className="leading-relaxed">
                  We don't currently have an event listed for
                  this date. If you're interested in booking,
                  please get in touch and we'll check
                  availability for you.
                </p>
              )}

            </div>

            <div className="shrink-0">

              {selectedStatus !== "booked" ? (
                <a
                  href={enquiryUrl}
                  className="inline-flex items-center justify-center rounded-full border px-7 py-3 font-semibold hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  🐾 Ask about this date
                </a>
              ) : (
                <div className="text-sm max-w-xs">
                  <p className="font-semibold mb-2">
                    This date is currently fully booked.
                  </p>

                  <a
                    href="/contact"
                    className="underline"
                  >
                    Ask about another date →
                  </a>
                </div>
              )}

            </div>

          </div>

        </section>
      )}

      {/* General enquiry */}
      <section className="rounded-3xl border p-6 md:p-8 text-center">

        <div className="max-w-2xl mx-auto">

          <div className="text-3xl mb-3">
            🐶
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Can't find the date you're looking for?
          </h3>

          <p className="mb-6 leading-relaxed">
            Don't worry — send us an enquiry and we'll check
            our availability for you.
          </p>

          <a
            href="/contact"
            className="inline-flex rounded-full border px-7 py-3 font-semibold hover:shadow-md transition"
          >
            📩 Send an enquiry
          </a>

        </div>

      </section>

    </div>
  );
}
