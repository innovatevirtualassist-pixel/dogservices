import type { Metadata } from "next"
import DogBoarding from "@/components/services/DogBoarding"


export const metadata: Metadata = {
  title: "Dog Boarding in Penkridge | Penkridge Dog Services",

  description:
    "Safe and caring dog boarding in Penkridge, Staffordshire. Home-from-home care from a trusted local dog boarding provider.",

  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-boarding-penkridge",
  },
}


export default function DogBoardingPage() {
  return (
    <main>
      <DogBoarding />
    </main>
  )
}