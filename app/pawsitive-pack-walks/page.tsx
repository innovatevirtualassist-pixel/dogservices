import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pawsitive Pack Walks | Walking Multiple Dogs Safely | Penkridge Dog Services",
  description:
    "Discover how we safely walk multiple dogs together, helping them build confidence, enjoy social time and make new friends around Penkridge.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/pawsitive-pack-walks",
  },
};

export default function PawsitivePackWalksPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Pawsitive Pack Walks 🐾❤️
      </h1>

      <article>

        <p>
          One of our favourite milestones has been confidently walking four dogs
          together—and sometimes even more! Every dog has their own personality,
          energy level and walking style, so creating a calm, happy group is
          something we genuinely enjoy.
        </p>

        <img
          src="/images/pack-walk.jpg"
          alt="Happy dogs enjoying a group walk together in Penkridge"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          A happy pack is built through patience, trust and plenty of wagging tails.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          More Than Just Walking
        </h2>

        <p>
          We love having doggies around—not just for walks, but also for
          playtime, enrichment and simply spending time together. Watching dogs
          build friendships, gain confidence and relax in each other's company is
          incredibly rewarding.
        </p>

        <img
          src="/images/dogs-playing.jpg"
          alt="Dogs playing happily together"
          className="rounded-xl mt-10 w-full"
        />

        <h2 className="text-2xl font-semibold mt-10">
          Every Dog Has Their Own Personality
        </h2>

        <p>
          Some dogs love to lead the adventure, while others prefer to quietly
          explore. Some enjoy chasing toys, others simply enjoy sniffing every
          interesting scent. Our role is to understand each dog's individual
          needs and make sure every member of the pack feels safe, included and
          relaxed.
        </p>

        <p className="mt-3 text-sm">
          Watching a happy group of dogs enjoying themselves is one of the best
          parts of our day.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Morning or Evening Walks?
        </h2>

        <p>
          There isn't always a single "best" time to walk dogs. During summer,
          early mornings and later evenings are usually cooler and more
          comfortable, while in winter a lunchtime walk may be ideal. We always
          consider the weather, the temperature and each dog's individual needs
          before setting off.
        </p>

        <p className="mt-4">
          That's why we created a live local weather page to help owners decide
          the safest time to enjoy their next adventure.
        </p>

      </article>

      <div className="mt-12 rounded-xl border bg-gray-50 p-6">

        <h2 className="text-2xl font-bold mb-4">
          Continue Exploring 🐾
        </h2>

        <ul className="space-y-3">

          <li>
            <a
              href="/penkridge-weather"
              className="font-semibold hover:underline"
            >
              🌦️ Check today's weather in Penkridge before heading out →
            </a>
          </li>

          <li>
            <a
              href="/summer-dog-safety"
              className="font-semibold hover:underline"
            >
              ☀️ Summer dog safety tips →
            </a>
          </li>

          <li>
            <a
              href="/meeting-bigger-dogs"
              className="font-semibold hover:underline"
            >
              🐶 Helping dogs meet bigger and older dogs →
            </a>
          </li>

          <li>
            <a
              href="/how-to-introduce-dogs"
              className="font-semibold hover:underline"
            >
              🦮 Introducing dogs safely →
            </a>
          </li>

          <li>
            <a
              href="/recent-walks"
              className="font-semibold hover:underline"
            >
              📸 See our latest adventures →
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="font-semibold hover:underline"
            >
              ❤️ Book your dog's next adventure →
            </a>
          </li>

        </ul>

      </div>

    </main>
  );
}
