
"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"


type Service = "walking" | "boarding" | "daycare" | "sitting"

const serviceLabels: Record<Service, string> = {
  walking: "Dog Walking",
  boarding: "Home Boarding",
  daycare: "Dog Daycare",
  sitting: "Pet Sitting",
}

function getTodayUK(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  return `${get("year")}-${get("month")}-${get("day")}`
}

function formatDate(date: string): string {
  if (!date) return "Not selected"

  const parsed = new Date(`${date}T12:00:00Z`)

  if (Number.isNaN(parsed.getTime())) return date

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(parsed)
}

export default function PetBookingForm({
  initialDate,
  initialEndDate,
}: {
  initialDate: string
  initialEndDate: string
}) {
  const [service, setService] = useState<Service>(
    initialEndDate > initialDate ? "boarding" : "walking"
  )
  const [startDate, setStartDate] = useState(initialDate)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dogName, setDogName] = useState("")
  const [dogDetails, setDogDetails] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [microchip, setMicrochip] = useState("")
  const [preferredTime, setPreferredTime] = useState("")
  const [consent, setConsent] = useState(false)
  const [today] = useState(getTodayUK)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!consent) return

    if (startDate < today) {
      alert("Please select a future date.")
      return
    }

    if (service === "boarding" && endDate < startDate) {
      alert("The check-out date cannot be before the check-in date.")
      return
    }

    const bookingDetails = [
      "Hello Penkridge Dog Services,",
      "",
      "I'd like to enquire about a dog care booking.",
      "",
      `Service: ${serviceLabels[service]}`,
      `Preferred date: ${formatDate(startDate)}`,
      `Preferred time: ${preferredTime || "Not specified"}`,
      ...(service === "boarding"
        ? [`Check-out date: ${formatDate(endDate)}`]
        : []),
      "",
      "CUSTOMER DETAILS",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      "",
      "DOG DETAILS",
      `Dog's name: ${dogName.trim()}`,
      `Breed: ${breed.trim() || "Not specified"}`,
      `Age: ${age.trim() || "Not specified"}`,
      `Microchip: ${microchip.trim() || "Not supplied at enquiry stage"}`,
      `Additional information: ${dogDetails.trim() || "None provided"}`,
      "",
      "I understand this is an enquiry only.",
      "The booking is not confirmed until approved.",
      "",
      "Thank you!",
    ].join("\n")

    const subject = `Booking Enquiry - ${serviceLabels[service]} - ${dogName.trim()}`

    const mailto = `mailto:penkridgedogservices@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bookingDetails)}`

    window.location.href = mailto
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"

  const sectionClass =
    "space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"

  return (
    <main className="min-h-screen bg-stone-50 px-5 pb-20 pt-28 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm font-medium text-emerald-800 hover:underline"
        >
          ← Back to Penkridge Dog Services
        </Link>

        <header className="mb-10 mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
            Penkridge Dog Services
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Book a Day With Us! 🐾
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Whether it's a lovely walk, a fun-filled day of care
            or a cosy overnight stay, we'd love to welcome your dog.
            Choose a service and tell us when you'd like to visit.
            We offer dog walking, home boarding, daycare and pet
            sitting in Penkridge and surrounding Staffordshire areas.
          </p>

          <p className="mt-4 font-medium text-emerald-900">
            Every booking is personally reviewed and confirmed,
            so we can make sure your dog receives the right care.
          </p>
        </header>

        <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-semibold text-emerald-950">
            🐾 Let's Plan Your Dog's Visit!
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Complete the form below to prepare your booking enquiry.
            When you click the enquiry button, your email app will
            open with the details ready to send.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Please send the email to complete your enquiry.
            No booking is confirmed until we have reviewed and
            approved your request.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <section className={sectionClass}>
            <h2 className="text-2xl font-bold">
              1. Choose Your Service
            </h2>

            <div>
              <label
                className="mb-2 block font-medium"
                htmlFor="service"
              >
                Dog care service
              </label>

              <select
                id="service"
                value={service}
                onChange={(e) =>
                  setService(e.target.value as Service)
                }
                className={inputClass}
              >
                <option value="walking">Dog Walking</option>
                <option value="boarding">Home Boarding</option>
                <option value="daycare">Dog Daycare</option>
                <option value="sitting">Pet Sitting</option>
              </select>
            </div>

            <div>
              <label
                className="mb-2 block font-medium"
                htmlFor="startDate"
              >
                {service === "boarding"
                  ? "Preferred check-in date"
                  : "Preferred date"}
              </label>

              <input
                id="startDate"
                type="date"
                required
                min={today}
                value={startDate}
                onChange={(e) => {
                  const selectedDate = e.target.value
                  setStartDate(selectedDate)

                  if (selectedDate > endDate) {
                    setEndDate(selectedDate)
                  }
                }}
                className={inputClass}
              />
            </div>

            {service === "boarding" && (
              <div>
                <label
                  className="mb-2 block font-medium"
                  htmlFor="endDate"
                >
                  Preferred check-out date
                </label>

                <input
                  id="endDate"
                  type="date"
                  required
                  min={startDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <label htmlFor="preferredTime" className="mb-2 block font-medium">
                Preferred time (optional)
              </label>
              <input id="preferredTime" type="time" value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)} className={inputClass} />
            </div>

            <p className="text-sm text-gray-600">
              Dates are requests only and are subject to availability.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-bold">
              2. Your Contact Details
            </h2>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                required
                maxLength={120}
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium"
              >
                Phone number
              </label>

              <input
                id="phone"
                type="tel"
                required
                maxLength={30}
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-bold">
              3. Tell Us About Your Dog
            </h2>

            <div>
              <label
                htmlFor="dogName"
                className="mb-2 block font-medium"
              >
                Dog's name
              </label>

              <input
                id="dogName"
                type="text"
                required
                maxLength={100}
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="breed" className="mb-2 block font-medium">Breed</label>
                <input id="breed" type="text" maxLength={100} value={breed}
                  onChange={(e) => setBreed(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="age" className="mb-2 block font-medium">Age</label>
                <input id="age" type="text" maxLength={40} value={age}
                  onChange={(e) => setAge(e.target.value)} className={inputClass} />
              </div>
            </div>

            {service === "boarding" && (
              <div>
                <label htmlFor="microchip" className="mb-2 block font-medium">
                  Microchip number (optional at enquiry stage)
                </label>
                <input id="microchip" type="text" maxLength={30} value={microchip}
                  onChange={(e) => setMicrochip(e.target.value)} className={inputClass} />
                <p className="mt-2 text-sm text-gray-500">
                  We will verify required records before confirming boarding.
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="dogDetails"
                className="mb-2 block font-medium"
              >
                Routine, temperament and anything we should know
              </label>

              <textarea
                id="dogDetails"
                rows={5}
                maxLength={2000}
                value={dogDetails}
                onChange={(e) => setDogDetails(e.target.value)}
                placeholder="Tell us about your dog's temperament, routine and general care needs."
                className={inputClass}
              />

              <p className="mt-2 text-sm text-gray-500">
                Please avoid sharing sensitive medical information
                at this initial enquiry stage.
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-bold">
              4. Review Your Enquiry
            </h2>

            <div className="space-y-3 rounded-xl bg-stone-100 p-5">
              <p>
                <strong>Service:</strong>{" "}
                {serviceLabels[service]}
              </p>

              <p>
                <strong>Preferred date:</strong>{" "}
                {formatDate(startDate)}
              </p>

              {service === "boarding" && (
                <p>
                  <strong>Check-out:</strong>{" "}
                  {formatDate(endDate)}
                </p>
              )}

              {preferredTime && (
                <p><strong>Preferred time:</strong> {preferredTime}</p>
              )}

              <p>
                <strong>Dog:</strong>{" "}
                {dogName.trim() || "Not entered"}
              </p>

              <p>
  <strong>Next step:</strong>{" "}
  <span className="font-medium text-emerald-800">
    Send your enquiry by email for our review.
  </span>
</p>

<p className="text-sm text-gray-600">
  Your booking will only be confirmed after
  Penkridge Dog Services has reviewed and
  approved your request.
</p>
            </div>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 accent-emerald-800"
              />

              <span className="text-sm leading-6 text-gray-700">
                I understand this is a booking enquiry, not a
                confirmed booking. I agree that Penkridge Dog
                Services may use the details I provide to
                respond to my enquiry.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Send My Booking Enquiry 🐾
            </button>

            <p className="text-center text-sm leading-6 text-gray-600">
              This button opens your email application with
              your enquiry filled in. You must press Send
              in your email application to contact us.
            </p>
          </section>
        </form>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-bold">
            We'd Love to Hear From You! ❤️
          </h2>

          <p className="mt-4 leading-7 text-gray-700">
            Have a question or need help arranging your dog's
            next visit? We're always happy to help you find
            the right care for your furry friend.
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Prefer to contact us directly? Send us an email
            and we'll get back to you as soon as we can.
          </p>

          <a
            href="mailto:penkridgedogservices@gmail.com?subject=Dog%20Care%20Booking%20Enquiry"
            className="mt-6 inline-block rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
          >
            Email Us About a Booking
          </a>
        </section>

        <section className="mt-10 rounded-2xl bg-stone-100 p-7">
          <h2 className="text-xl font-bold">
            What Happens Next?
          </h2>

          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-gray-700">
            <li>
              You send us your booking enquiry by email.
            </li>
            <li>
              We review your preferred dates and your dog's needs.
            </li>
            <li>
              We may arrange a meet and greet or request
              vaccination information where appropriate.
            </li>
            <li>
              We personally confirm your booking once
              everything has been agreed.
            </li>
          </ol>

          <p className="mt-5 text-sm text-gray-600">
            We never treat an enquiry as an automatically
            confirmed booking.
          </p>
        </section>
      </div>
    </main>
  )
}
