import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dog Walking Calendar & Events | Penkridge Dog Services",
  description:
    "View upcoming dog walks, social events and indicative availability with Penkridge Dog Services in Penkridge, Staffordshire.",
}

export default function CalendarPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <section className="mb-10">
        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          🐾 Upcoming Walks & Events
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed">
          Discover upcoming dog walks, social events and
          indicative availability with Penkridge Dog Services.
          Click an event to find out more.
        </p>
      </section>

      <div className="overflow-hidden rounded-2xl border shadow-lg">
        <iframe
          title="Penkridge Dog Services Calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FLondon&title=Penkridge%20Dog%20Services&showPrint=0&src=aW5ub3ZhdGV2aXJ0dWFsYXNzaXN0QGdtYWlsLmNvbQ&src=ZW4tZ2IudWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ad1457&color=%230b8043"
          style={{ border: 0 }}
          width="100%"
          height="700"
          loading="lazy"
        />
      </div>

      <p className="mt-8 text-center text-sm opacity-70">
        Availability is indicative and will be confirmed
        before your booking is secured.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/#contact"
          className="inline-block rounded-xl border px-6 py-3 font-semibold transition hover:shadow-md"
        >
          Enquire About Dog Walking or Boarding
        </a>
      </div>
    </main>
  )
}
