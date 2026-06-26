export const metadata = {
  title: "🐾 Upcoming Walks & Events | Penkridge Dog Services",
  description: "Updated regularly with upcoming walks, social events and availability. Check back for the latest updates.",
};

export default function CalendarPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        🐾 Upcoming Walks & Events
      </h1>

      <p className="mb-8 text-lg">
        Updated regularly with upcoming walks, social events and availability. Check back for the latest updates.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FLondon&title=Penkridge%20Dog%20Services&showPrint=0&src=aW5ub3ZhdGV2aXJ0dWFsYXNzaXN0QGdtYWlsLmNvbQ&src=ZW4tZ2IudWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ad1457&color=%230b8043"
          style={{ border: 0 }}
          width="100%"
          height="700"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
