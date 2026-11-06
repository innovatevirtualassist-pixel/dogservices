
"use client"

import { useState } from "react"
import Link from "next/link"

function getTodayUK() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())

  const part = (type: string) =>
    parts.find((item) => item.type === type)?.value ?? ""

  return `${part("year")}-${part("month")}-${part("day")}`
}

function dateKey(year: number, month: number, day: number) {
  return [
    year,
    String(month + 1).padStart(2, "0"),
    String(day).padStart(2, "0"),
  ].join("-")
}

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function BookingDatePicker() {
  const today = getTodayUK()
  const [year, setYear] = useState(Number(today.slice(0, 4)))
  const [month, setMonth] = useState(Number(today.slice(5, 7)) - 1)

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

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm md:p-8">
      <h2 className="text-center text-2xl font-bold text-gray-900">
        Choose Your Preferred Date 🐾
      </h2>

      <p className="mt-3 text-center text-sm leading-6 text-gray-600">
        Select a date to start your booking enquiry.
        All requests are subject to availability and approval.
      </p>

      <div className="mt-7 flex items-center justify-between">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={currentMonth}
          aria-label="Previous month"
          className="rounded-lg border border-gray-200 px-4 py-2 text-gray-900 disabled:cursor-not-allowed disabled:opacity-30"
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
          className="rounded-lg border border-gray-200 px-4 py-2 text-gray-900"
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

          if (isPast) {
            return (
              <div
                key={date}
                className="flex aspect-square items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-300"
              >
                {day}
              </div>
            )
          }

          return (
            <Link
              key={date}
              href={`/booking?date=${date}`}
              aria-label={`Request a booking for ${date}`}
              className="flex aspect-square items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {day}
            </Link>
          )
        })}
      </div>

      <p className="mt-6 text-center text-xs leading-5 text-gray-500">
        Selectable dates are not guaranteed to be available.
        We will confirm your booking personally after reviewing
        your request.
      </p>
    </section>
  )
}
