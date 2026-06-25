import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dog Services in Penkridge | Dog Walking, Boarding & Sitting",
  description:
    "Explore Penkridge Dog Services including dog walking, dog sitting and dog boarding in Penkridge and Staffordshire.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-services",
  },
}

export default function DogServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>


      <h1 className="text-4xl font-bold mb-10">
        Our Dog Services 🐶🐾
      </h1>


      <p className="mb-8">
        At Penkridge Dog Services, we provide caring and reliable support for
        dogs across Penkridge and Staffordshire.
      </p>


      <div className="grid md:grid-cols-3 gap-6">


        <a
          href="/dog-walking-penkridge"
          className="rounded-xl border p-6 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-3">
            Dog Walking
          </h2>

          <p>
            Safe and enjoyable walks designed around your dog's needs.
          </p>
        </a>


        <a
          href="/dog-boarding-penkridge"
          className="rounded-xl border p-6 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-3">
            Dog Boarding
          </h2>

          <p>
            A comfortable home-from-home environment for your dog.
          </p>
        </a>


        <a
          href="/dog-sitting-penkridge"
          className="rounded-xl border p-6 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-3">
            Dog Sitting
          </h2>

          <p>
            Caring visits and companionship when you need support.
          </p>
        </a>


      </div>


    </main>
  )
}
