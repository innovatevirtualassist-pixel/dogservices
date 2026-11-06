"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

type Service = "walking" | "boarding" | "daycare" | "sitting"

export default function BookingPage() {
  const [service, setService] = useState<Service>("walking")
  const [startDate, setStartDate] = useState("2026-11-10")
  const [endDate, setEndDate] = useState("2026-11-10")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dogName, setDogName] = useState("")
  const [dogDetails, setDogDetails] = useState("")
  const [consent, setConsent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Step 2 will replace this with a secure API request.
    // Do not tell customers their booking was submitted yet.
    alert(
      "This booking form is being prepared. " +
      "Please contact Penkridge Dog Services to request a booking."
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-5 pt-28 pb-20">
      <Link href="/" className="text-sm text-primary hover:underline">
        ← Back to Penkridge Dog Services
      </Link>

      <header className="mt-8 mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Penkridge Dog Services
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Request a Dog Care Booking 🐾
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Looking for dog walking, home boarding, daycare or pet
          sitting in Penkridge and surrounding Staffordshire areas?
          Tell us what you need and we'll help you find a suitable
          arrangement for your dog.
        </p>

        <p className="mt-3 font-medium">
          All bookings are subject to availability, suitability
          checks and confirmation by Penkridge Dog Services.
        </p>
      </header>

      <div className="mb-8 rounded-xl border p-5 bg-muted/30">
        <h2 className="text-lg font-semibold">
          Booking system preview
        </h2>
        <p className="mt-2 text-sm leading-6">
          Online submissions are not yet active. Please contact
          us directly to request a booking until the system
          is fully connected.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        <section className="rounded-2xl border p-6 space-y-5">
          <h2 className="text-2xl font-bold">
            1. Choose Your Service
          </h2>

          <label className="block font-medium" htmlFor="service">
            Dog care service
          </label>

          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
            className="w-full rounded-lg border bg-background p-3"
          >
            <option value="walking">Dog Walking</option>
            <option value="boarding">Home Boarding</option>
            <option value="daycare">Dog Daycare</option>
            <option value="sitting">Pet Sitting</option>
          </select>

          <div>
            <label className="mb-2 block font-medium" htmlFor="startDate">
              {service === "boarding"
                ? "Check-in date"
                : "Preferred date"}
            </label>

            <input
              id="startDate"
              type="date"
              required
              min={new Date().toLocaleDateString("en-CA")}
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value)
                if (e.target.value > endDate) {
                  setEndDate(e.target.value)
                }
              }}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          {service === "boarding" && (
            <div>
              <label className="mb-2 block font-medium" htmlFor="endDate">
                Check-out date
              </label>

              <input
                id="endDate"
                type="date"
                required
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-lg border bg-background p-3"
              />
            </div>
          )}
        </section>

        <section className="rounded-2xl border p-6 space-y-5">
          <h2 className="text-2xl font-bold">
            2. Your Contact Details
          </h2>

          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Full name
            </label>
            <input
              id="name"
              required
              maxLength={120}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block font-medium">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>
        </section>

        <section className="rounded-2xl border p-6 space-y-5">
          <h2 className="text-2xl font-bold">
            3. Tell Us About Your Dog
          </h2>

          <div>
            <label htmlFor="dogName" className="mb-2 block font-medium">
              Dog's name
            </label>
            <input
              id="dogName"
              required
              maxLength={100}
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>

          <div>
            <label htmlFor="dogDetails" className="mb-2 block font-medium">
              Breed, age and anything we should know
            </label>
            <textarea
              id="dogDetails"
              rows={5}
              maxLength={2000}
              value={dogDetails}
              onChange={(e) => setDogDetails(e.target.value)}
              placeholder="Tell us about your dog's routine, temperament and care requirements. Please avoid sharing sensitive medical details at this stage."
              className="w-full rounded-lg border bg-background p-3"
            />
          </div>
        </section>

        <section className="rounded-2xl border p-6 space-y-5">
          <h2 className="text-2xl font-bold">
            4. Review Your Request
          </h2>

          <div className="rounded-xl bg-muted/40 p-5 space-y-2">
            <p><strong>Service:</strong> {service}</p>
            <p><strong>Date:</strong> {startDate}</p>
            {service === "boarding" && (
              <p><strong>Check-out:</strong> {endDate}</p>
            )}
            <p><strong>Dog:</strong> {dogName || "Not entered"}</p>
            <p><strong>Status:</strong> Not submitted</p>
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm leading-6">
              I understand that this is a booking enquiry
              and that no booking is confirmed until
              Penkridge Dog Services approves it.
              I agree to my details being used to respond
              to my enquiry.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground"
          >
            Preview Booking Request
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Online submissions are not active yet.
            For bookings, please email{" "}
            <a
              href="mailto:penkridgedogservices@gmail.com"
              className="underline"
            >
              penkridgedogservices@gmail.com
            </a>.
          </p>
        </section>
      </form>
    </main>
  )
}
