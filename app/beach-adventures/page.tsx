import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beach Adventures for Dogs | Penkridge Dog Services",
  description:
    "Looking for a special day out? Discover why a beach adventure can be a wonderful experience for dogs, with tips from Penkridge Dog Services.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/beach-adventures",
  },
}

export default function BeachAdventuresPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Adventure Idea: A Day at the Beach! 🏖️🐶
      </h1>

      <article>

        <p>
          Every now and then, it's lovely to swap countryside paths for
          something completely different. A beach adventure offers dogs a whole
          new world to explore, from soft sand beneath their paws to exciting
          new smells carried by the sea breeze.
        </p>

        <p className="mt-4">
          For many dogs, the beach is the perfect place to enjoy a change of
          scenery. Whether they're running across the sand, paddling at the
          water's edge or simply taking everything in, it can become a day full
          of fun, enrichment and happy memories.
        </p>

        <img
          src="/images/dog-beach-adventure.jpg"
          alt="Happy dog enjoying a beach adventure"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          Every adventure starts with a wagging tail and plenty of excitement.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Why Dogs Love the Beach
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Lots of space to explore.</li>
          <li>Interesting smells and new surroundings.</li>
          <li>Soft sand that's gentle on paws.</li>
          <li>Opportunities to paddle and cool off safely.</li>
          <li>A fantastic way to provide mental and physical enrichment.</li>
        </ul>

        <video
          controls
          poster="/images/dog-beach-adventure.jpg"
          className="rounded-xl mt-10 w-full"
        >
          <source
            src="/videos/dog-beach-adventure.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

        <p className="mt-3 text-sm">
          Nothing beats zoomies on the sand and a splash in the sea!
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Beach Safety Tips
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Always check if dogs are allowed on the beach.</li>
          <li>Bring plenty of fresh drinking water.</li>
          <li>Discourage dogs from drinking seawater.</li>
          <li>Watch for hot sand during very warm weather.</li>
          <li>Rinse off salt and sand after your visit.</li>
          <li>Keep an eye on tides and stronger waves.</li>
        </ul>

        <p className="mt-8">
          Whether it's their very first seaside adventure or one of many,
          there's something magical about watching a happy dog discover the
          beach. New scents, open space and the sound of the waves make for an
          unforgettable day out.
        </p>

        <p className="mt-6">
          Sometimes the best adventures are simply about exploring somewhere
          new together. ❤️🐶🏖️
        </p>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/local-dog-walks"
          className="block font-semibold hover:underline"
        >
          🌿 Explore our favourite local walks →
        </a>

        <a
          href="/recent-walks"
          className="block font-semibold hover:underline"
        >
          🐾 Read our latest dog updates →
        </a>

        <a
          href="/summer-dog-safety"
          className="block font-semibold hover:underline"
        >
          ☀️ Summer dog safety tips →
        </a>

        <a
          href="/contact"
          className="block font-semibold hover:underline"
        >
          Contact Penkridge Dog Services →
        </a>

      </div>

    </main>
  )
}
