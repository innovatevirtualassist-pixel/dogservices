import InteractiveCalendar from "@/components/InteractiveCalendar";

export const metadata = {
  title: "🐾 Upcoming Walks & Events | Penkridge Dog Services",
  description:
    "Check upcoming dog walks, social walks, boarding availability and events with Penkridge Dog Services.",
};

export default function CalendarPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <section className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          🐾 Upcoming Walks & Events
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Check our latest walks, social events and availability.
          Click a date to find out more or send us an enquiry.
        </p>
      </section>

      <InteractiveCalendar />

      <p className="text-sm text-center mt-8 opacity-70">
        Availability is indicative and will be confirmed with you before
        your booking is secured.
      </p>
    </main>
  );
}
