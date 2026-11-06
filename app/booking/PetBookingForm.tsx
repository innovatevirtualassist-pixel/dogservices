
import PetBookingForm from "./PetBookingForm"

type BookingPageProps = {
  searchParams: Promise<{
    date?: string | string[]
  }>
}

function getTodayUK(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? ""

  return `${get("year")}-${get("month")}-${get("day")}`
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false

  const parsed = new Date(`${value}T12:00:00Z`)

  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  )
}

export default async function BookingPage({
  searchParams,
}: BookingPageProps) {
  const params = await searchParams
  const today = getTodayUK()

  const requestedDate =
    typeof params.date === "string" ? params.date : ""

  const initialDate =
    isValidDate(requestedDate) && requestedDate >= today
      ? requestedDate
      : today

  return (
    <main className="min-h-screen bg-stone-50 px-4 pb-16 pt-28">
      <PetBookingForm initialDate={initialDate} />
    </main>
  )
}
