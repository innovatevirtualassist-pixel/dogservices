
import PetBookingForm from "./PetBookingForm"

type Props = {
  searchParams: Promise<{
    date?: string | string[]
    end?: string | string[]
  }>
}

function todayUK(): string {
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

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

  const parsed = new Date(`${value}T12:00:00Z`)

  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  )
}

export default async function BookingPage({ searchParams }: Props) {
  const params = await searchParams
  const today = todayUK()

  const requestedStart =
    typeof params.date === "string" ? params.date : ""

  const requestedEnd =
    typeof params.end === "string" ? params.end : ""

  const initialDate =
    validDate(requestedStart) && requestedStart >= today
      ? requestedStart
      : today

  const initialEndDate =
    validDate(requestedEnd) && requestedEnd >= initialDate
      ? requestedEnd
      : initialDate

  return (
    <PetBookingForm
      initialDate={initialDate}
      initialEndDate={initialEndDate}
    />
  )
}
