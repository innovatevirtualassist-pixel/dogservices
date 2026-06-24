import type { Metadata } from "next"
import DogWalking from "@/components/services/DogWalking"


export const metadata: Metadata = {
  title: "Dog Walking in Penkridge | Penkridge Dog Services",

  description:
    "Professional dog walking in Penkridge, Staffordshire. Reliable daily walks, puppy visits and personalised care for your dog.",

  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-walking-penkridge",
  },
}


export default function DogWalkingPage() {
  return (
    <main>
      <DogWalking />
    </main>
  )
}