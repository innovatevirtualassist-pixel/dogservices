import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Grooming Tips | Penkridge Dog Services",
  description:
    "Helpful dog grooming advice from Penkridge Dog Services including brushing, bathing, nail care and keeping your dog comfortable all year round.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/dog-grooming-tips",
  },
};

export default function DogGroomingTipsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Dog Grooming Tips ✂️🐶
      </h1>

      <article>

        <p>
          Grooming is much more than helping your dog look their best. Regular
          brushing, bathing and coat care keeps dogs comfortable, healthy and
          allows owners to spot small problems before they become bigger ones.
        </p>

        <img
          src="/images/dog-grooming.jpg"
          alt="Dog enjoying a gentle grooming session"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          Grooming is a great opportunity to bond with your dog.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Brush Regularly
        </h2>

        <p>
          Regular brushing removes loose hair, dirt and tangles while spreading
          natural oils throughout the coat. Long-haired breeds often need daily
          brushing, while shorter coats may only require grooming once or twice
          a week.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Bathing
        </h2>

        <p>
          Dogs don't usually need frequent baths unless they've become muddy or
          particularly dirty. Always use dog-specific shampoo as human products
          can irritate their skin.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Nail Care
        </h2>

        <p>
          Nails that become too long can affect your dog's posture and comfort.
          If you hear nails clicking on hard floors, they may need trimming.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Check Eyes, Ears and Paws
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Keep eyes clean.</li>
          <li>Check ears for redness or unpleasant smells.</li>
          <li>Inspect paws after walks.</li>
          <li>Remove grass seeds and small stones.</li>
          <li>Watch for cuts or cracked paw pads.</li>
        </ul>

        <video
          controls
          poster="/images/dog-grooming.jpg"
          className="rounded-xl mt-10 w-full"
        >
          <source
            src="/videos/dog-grooming.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

        <p className="mt-3 text-sm">
          Calm, gentle grooming helps dogs enjoy the experience.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Grooming Builds Trust
        </h2>

        <p>
          Taking time to groom your dog regularly strengthens your bond and
          helps your dog become comfortable with being handled, making visits
          to the groomer or vet much less stressful.
        </p>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/recent-walks"
          className="block font-semibold hover:underline"
        >
          🐾 Read our latest updates →
        </a>

        <a
          href="/summer-dog-safety"
          className="block font-semibold hover:underline"
        >
          ☀️ Summer Dog Safety →
        </a>

        <a
          href="/dog-walking-weather"
          className="block font-semibold hover:underline"
        >
          🌤 Today's Dog Walking Weather →
        </a>

        <a
          href="/contact"
          className="block font-semibold hover:underline"
        >
          Contact Penkridge Dog Services →
        </a>

      </div>

    </main>
  );
}
