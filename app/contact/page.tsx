import { Contact } from "@/components/contact"

export const metadata = {
  title: "Contact Penkridge Dog Services | Dog Walking & Boarding",

  description:
    "Contact Penkridge Dog Services for dog walking, dog boarding and dog sitting in Penkridge, Staffordshire.",

  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/contact",
  },
}


export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Contact Penkridge Dog Services
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        Get in touch to book dog walking, boarding or puppy care in Penkridge and surrounding Staffordshire areas.
      </p>

      <Contact />

    </main>
  )
}