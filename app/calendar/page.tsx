export const metadata = {
  title: "Dog Walk Calendar | Penkridge Dog Services",
  description: "See upcoming dog walks, availability and events.",
};

export default function CalendarPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Dog Walk Calendar
      </h1>

      <p className="mb-8 text-lg">
        Check our latest walks, puppy meet-ups, availability and upcoming
        events. This calendar updates automatically whenever we add something
        new.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          src="PASTE-YOUR-GOOGLE-CALENDAR-EMBED-LINK-HERE"
          style={{ border: 0 }}
          width="100%"
          height="700"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
