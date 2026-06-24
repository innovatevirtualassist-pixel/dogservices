import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Dog Walks Around Penkridge | Local Dog Walking Routes",
  description:
    "Discover some of our favourite dog walking areas around Penkridge, Staffordshire. Safe local walks, countryside routes and tips from Penkridge Dog Services.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/local-dog-walks",
  },
}

export default function LocalDogWalksPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold text-gray-700 hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>


      <h1 className="text-4xl font-bold mb-10">
        Favourite Dog Walking Spots Around Penkridge 🐶🌿
      </h1>


      <article>

        <h2 className="text-2xl font-semibold mb-4">
          Exploring Penkridge and Staffordshire Footpaths
        </h2>


        <p>
          Penkridge is surrounded by beautiful countryside, making it a
          wonderful place for dogs to enjoy walks, new smells and plenty of
          enrichment.
        </p>


        <p className="mt-6">
          When walking dogs around Penkridge, we love finding routes that offer
          space to explore while keeping dogs comfortable and safe.
        </p>


        <h3 className="text-xl font-semibold mt-6">
          What we look for in a great dog walk:
        </h3>


        <ul className="list-disc ml-6 mt-3">
          <li>Safe paths away from busy roads</li>
          <li>Opportunities for sniffing and exploring</li>
          <li>Shade during warmer weather</li>
          <li>Space for dogs to enjoy their surroundings</li>
          <li>Routes suitable for different energy levels</li>
        </ul>


        <p className="mt-6">
          Every dog is different. Some enjoy longer countryside adventures,
          while others prefer shorter relaxed walks with lots of sniffing time.
        </p>


        <p>
          At Penkridge Dog Services, we tailor walks around the needs of each
          dog to make sure they enjoy their time outdoors.
        </p>


        <img
          src="/images/penkridge-dog-walk.jpeg"
          alt="Dog walking on countryside paths in Penkridge Staffordshire"
          className="rounded-xl mt-8 w-full"
        />


        <p className="mt-6">
          One of our favourite places to enjoy a dog walk around Penkridge is
          along the canals. The peaceful towpaths offer a lovely change of
          scenery, with plenty of interesting smells, new sights and gentle
          exploring for dogs to enjoy.
        </p>


        <p>
          Canal walks are a great way to give dogs mental enrichment as well as
          exercise. There is always something new to discover — from different
          sounds and smells to watching the boats pass by. We always make sure
          walks are suited to each dog's comfort level, keeping an eye on the
          weather, surroundings and making sure every dog has a safe and
          enjoyable adventure.
        </p>


        <img
          src="/images/penkridge-canal-dog-walk.jpg"
          alt="Dog walking along the canal in Penkridge Staffordshire"
          className="rounded-xl mt-8 w-full"
        />


        <p className="mt-6">
          We love seeing happy, tired dogs after a good walk. 🐾
        </p>


      </article>


      <a
        href="/recent-walks"
        className="inline-block mt-8 font-semibold text-gray-700 hover:underline"
      >
        ← Read our latest dog care updates
      </a>


    </main>
  )
}