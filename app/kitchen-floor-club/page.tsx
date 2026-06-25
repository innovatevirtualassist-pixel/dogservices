import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcome to the Kitchen Floor Club | Penkridge Dog Services",
  description:
    "When Staffordshire gets hot, the coolest place in the house becomes the most popular. Welcome to the Kitchen Floor Club.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/kitchen-floor-club",
  },
}

export default function KitchenFloorClubPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Welcome to the Kitchen Floor Club 🐶❄️
      </h1>

      <article>

        <p>
          If you've owned a dog during a British summer, you've probably noticed
          the same thing we have. When the weather gets warm, suddenly everyone
          ends up on the kitchen floor.
        </p>

        <p className="mt-4">
          Sofas become less appealing, dog beds are abandoned and somehow the
          coolest, most desirable spot in the house becomes a patch of kitchen
          tiles.
        </p>

        <p className="mt-4">
          Over the last few warm days, we've had several proud members of the
          Kitchen Floor Club stretched out enjoying the cooler surface and
          taking life very easy indeed.
        </p>

        <img
          src="/images/kitchen-floor-club.jpg"
          alt="Dog relaxing on a cool kitchen floor during warm weather"
          className="rounded-xl mt-8 w-full"
        />

        <h2 className="text-2xl font-semibold mt-8">
          Why Dogs Love Cool Floors
        </h2>

        <p>
          Dogs don't sweat like humans. They regulate their temperature
          differently and often seek out cooler surfaces when the weather warms
          up.
        </p>

        <p className="mt-4">
          Tile, stone and laminate floors can feel noticeably cooler than beds,
          rugs and furniture, helping dogs stay comfortable during hot weather.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Summer Comfort Matters
        </h2>

        <p>
          During warmer days, we always keep an eye on temperatures, provide
          plenty of fresh water and adjust activities where needed.
        </p>

        <p className="mt-4">
          Sometimes the best enrichment activity isn't a long walk or a game of
          fetch. Sometimes it's simply finding the perfect cool spot, stretching
          out and enjoying a peaceful nap.
        </p>

        <p className="mt-8">
          So if your dog has recently joined the Kitchen Floor Club, they're in
          good company. Membership appears to be growing rapidly across
          Penkridge. ❤️🐾
        </p>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/summer-dog-safety"
          className="block font-semibold hover:underline"
        >
          ☀️ Read our Summer Dog Safety Tips →
        </a>

        <a
          href="/recent-walks"
          className="block font-semibold hover:underline"
        >
          🐾 Read our latest dog updates →
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
