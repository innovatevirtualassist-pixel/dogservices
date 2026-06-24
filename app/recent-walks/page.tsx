import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recent Dog Walks & Dog Care Tips | Penkridge Dog Services",
  description:
    "Latest dog walking updates, local Penkridge walks and dog care advice from Penkridge Dog Services. Helpful tips for keeping dogs safe and happy.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/recent-walks",
  },
}

export default function RecentWalksPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">


      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold text-gray-700 hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>


      <h1 className="text-4xl font-bold mb-10">
        Recent Walks & Dog Care Tips 🐾
      </h1>


      <article>


        <h2 className="text-2xl font-semibold mb-4">
          24th June 2026: Hot Weather Reminder 🌞
        </h2>


        <p>
          Warm weather is finally here in Penkridge, but it is important to keep
          our doggies safe during the warmer months.
        </p>


        <p className="mt-6">
          Dogs can overheat much more quickly than people, and heatstroke can
          become a serious emergency. Even when temperatures do not feel extreme
          to us, pavements, footpaths and outdoor surfaces can become very hot
          for our four-legged friends.
        </p>


        <h3 className="text-xl font-semibold mt-6">
          Signs of heatstroke can include:
        </h3>


        <ul className="list-disc ml-6 mt-3">
          <li>Excessive panting</li>
          <li>Drooling more than usual</li>
          <li>Lethargy or weakness</li>
          <li>Bright red gums</li>
          <li>Vomiting or diarrhoea</li>
          <li>Difficulty walking or collapse</li>
        </ul>


        <p className="mt-6">
          To help keep dogs safe during summer dog walks in Penkridge, we choose
          cooler walking times, look for shaded routes, carry fresh water and
          adjust walks depending on the weather.
        </p>


        <p className="mt-6">
          On particularly hot days, outdoor play may need to be limited. Dogs
          can still enjoy plenty of enrichment indoors through games, training
          exercises, puzzle toys and quality time inside the house.
        </p>


        <video
          controls
          poster="/images/dog-playing-inside.jpg"
          className="rounded-xl mt-8 w-full"
        >
          <source
            src="/videos/playing-inside-house.mp4"
            type="video/mp4"
          />

          Your browser does not support video.
        </video>


        <p className="mt-3 text-sm text-gray-600">
          Indoor enrichment and playtime helps dogs stay happy, stimulated and
          safe during hot weather in Penkridge.
        </p>


        <p className="mt-6">
          If you are enjoying the sunshine around Penkridge and Staffordshire,
          remember to check walking surfaces before heading out and never leave
          dogs in a parked vehicle, even for a short time.
        </p>


        <img
          src="/images/dog-summer-walk.jpeg"
          alt="Dog walking safely during summer in Penkridge Staffordshire"
          className="rounded-xl mt-8 w-full"
        />


        <p className="mt-6">
          We always put the comfort and wellbeing of dogs first. Safe walks,
          happy dogs and plenty of tail wags. ❤️🐶
        </p>


      </article>


      <a
        href="/local-dog-walks"
        className="inline-block mt-8 font-semibold text-gray-700 hover:underline"
      >
        Next: Favourite Dog Walking Spots Around Penkridge →
      </a>


    </main>
  )
}