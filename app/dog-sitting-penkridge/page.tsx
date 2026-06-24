import type { Metadata } from "next"
import DogSitting from "@/components/services/DogSitting"


export const metadata: Metadata = {
  title: "Dog Sitting in Penkridge | Penkridge Dog Services",

  description:
    "Professional dog sitting and pet care services in Penkridge, Staffordshire. Trusted local care for your pets while you're away.",

  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-sitting-penkridge",
  },
}


export default function DogSittingPage() {
  return (
    <main>
      <DogSitting />
    </main>
  )
}