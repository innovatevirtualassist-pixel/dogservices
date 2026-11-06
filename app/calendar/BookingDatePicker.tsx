
"use client"

import { useState } from "react"
import Link from "next/link"

function todayUK() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? ""

  return `${get("year")}-${get("month")}-${get("day")}`
}

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function BookingDatePicker() {
  const today = todayUK()
  const [year, setYear] = useState(Number(today.slice(0, 4)))
  const [month, setMonth] = useState(Number(today.slice(5, 7)) - 1)
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const firstDay = new Date(Date.UTC(year, month, 1))
  const daysInMonth = new Date(
    Date.UTC(year, month + 1, 0)
  ).getUTCDate()

  const offset = (firstDay.getUTCDay() + 6) % 7

  const monthLabel = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(firstDay)

  const currentMonth =
    year === Number(today.slice(0, 4)) &&
    month === Number(today.slice(5, 7)) - 1

  function changeMonth(amount: number) {
    const next = new Date(Date.UTC(year, month + amount, 1))
    setYear(next.getUTCFullYear())
    setMonth(next.getUTCMonth())
  }

  function selectDate(date: string) {
    if (!start || end || date < start) {
      setStart(date)
      setEnd("")
    } else {
      setEnd(date)
    }
  }

  const bookingUrl = start
    ? `/booking?date=${start}&end=${end || start}`
    : "/booking"

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        Choose Your Booking Dates 🐾
      </h2>

      <p className="mt-3 text-center text-sm leading-6 text-gray-600">
        Select one date for a single-day enquiry,
        or select a start and end date for a longer stay.
      </p>

      <div className="mt-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={currentMonth}
          aria-label="Previous month"
          className="rounded-lg border px-4 py-2 disabled:opacity-30"
        >
          ←
        </button>

        <h3 className="text-lg font-semibold text-gray-900">
          {monthLabel}
        </h3>

        <button
          type="button"
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="rounded-lg border px-4 py-2"
        >
          →
        </button>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-2 text-center">
        {weekdays.map((day) => (
          <div
            key={day}
            className="py-2 text-xs font-semibold text-gray-500"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: offset }, (_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1
          const date = dateKey(year, month, day)
          const isPast = date < today
          const selected = date === start || date === end
          const inRange = !!start && !!end && date > start && date < end

          return (
            <button
              key={date}
              type="button"
              disabled={isPast}
              onClick={() => selectDate(date)}
              aria-label={`Select ${date}`}
              aria-pressed={selected}
              className={`flex aspect-square items-center justify-center rounded-xl border text-sm font-semibold transition ${
                isPast
                  ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300"
                  : selected
                    ? "border-emerald-800 bg-emerald-800 text-white"
                    : inRange
                      ? "border-emerald-200 bg-emerald-200 text-emerald-950"
                      : "border-emerald-100 bg-emerald-50 text-emerald-900 hover:bg-emerald-200"
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>

      <div className="mt-7 rounded-xl bg-stone-50 p-5 text-sm text-gray-800">
        <p>
          <strong>Start date:</strong> {start || "Not selected"}
        </p>

        <p className="mt-2">
          <strong>End date:</strong> {end || (start ? "Same day" : "Not selected")}
        </p>

        <p className="mt-3 text-xs text-gray-600">
          To change your selection, click another date to start again.
          You can select an end date in a different month.
        </p>
      </div>

      <Link
        href={bookingUrl}
        aria-disabled={!start}
        tabIndex={start ? 0 : -1}
        onClick={(event) => {
          if (!start) event.preventDefault()
        }}
        className={`mt-5 block rounded-xl px-6 py-4 text-center font-semibold text-white ${
          start
            ? "bg-emerald-800 hover:bg-emerald-900"
            : "pointer-events-none bg-gray-400"
        }`}
      >
        Request These Dates 🐾
      </Link>

      <p className="mt-4 text-center text-xs leading-5 text-gray-500">
        Dates are requests only. Availability has not been
        checked against Google Calendar, and bookings
        require personal confirmation.
      </p>
    </section>
  )
}
