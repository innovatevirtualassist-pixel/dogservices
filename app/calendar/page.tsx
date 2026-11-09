
import BookingDatePicker from "./BookingDatePicker"

export default function CalendarPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-28">
      <section className="mb-10 text-center">
        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          🐾 Check Availability & Book
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed">
          Planning dog boarding, dog walking or dog sitting
          in Penkridge? Check our availability and choose
          your preferred dates below.
        </p>
      </section>

      <section className="mb-12">
        <BookingDatePicker />
      </section>

      <p className="mt-8 text-center text-sm text-gray-600">
        All bookings are subject to confirmation.
        Selecting a date does not guarantee availability.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/booking"
          className="inline-block rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
        >
          Request a Booking 🐾
        </a>
      </div>
    </main>
  )
}
