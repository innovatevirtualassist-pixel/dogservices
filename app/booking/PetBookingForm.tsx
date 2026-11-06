
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

export default function PetBookingForm({ initialDate }: { initialDate: string }) {
  const [service, setService] = useState<Service>("walking")
  const [startDate, setStartDate] = useState(initialDate)
  const [endDate, setEndDate] = useState(initialDate)
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
