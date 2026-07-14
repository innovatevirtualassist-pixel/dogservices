import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Sitting in Penkridge | Pet Care While You're Away",
  description:
    "Professional pet sitting in Penkridge. Caring home visits for dogs and pets while you're at work, away for the day or enjoying a holiday.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/pet-sitting-penkridge",
  },
};

export default function PetSittingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Pet Sitting While You're Away 🏡🐾
      </h1>

      <article>

        <p>
          Leaving your pet behind can be one of the hardest parts of going away,
          whether it's for work, a weekend break or a family holiday. Our pet
          sitting service in Penkridge provides caring home visits so your pets
          can stay relaxed in the place they know best — their own home.
        </p>

        <img
          src="/images/pet-sitting-home.jpg"
          alt="Happy dog relaxing at home during a pet sitting visit"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          Home visits help many pets stay calm and maintain their normal routine.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          What's Included?
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Fresh food and clean drinking water.</li>
          <li>Toilet breaks and garden visits.</li>
          <li>Lots of cuddles and companionship.</li>
          <li>Playtime and enrichment activities.</li>
          <li>Medication administration where agreed.</li>
          <li>Photo and video updates for complete peace of mind.</li>
        </ul>

        <img
          src="/images/pet-sitting-playtime.jpg"
          alt="Dog enjoying playtime during a home visit"
          className="rounded-xl mt-10 w-full"
        />

        <h2 className="text-2xl font-semibold mt-10">
          Why Choose Home Pet Sitting?
        </h2>

        <p>
          Many pets feel happier staying in familiar surroundings. Keeping their
          normal routine reduces stress and allows them to relax while you're
          away. Home visits are ideal for dogs, puppies and many other family
          pets that simply need a friendly face during the day.
        </p>

        <video
          controls
          poster="/images/pet-sitting-home.jpg"
          className="rounded-xl mt-10 w-full"
        >
          <source
            src="/videos/pet-sitting.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

        <p className="mt-3 text-sm">
          We love sending regular updates so you can enjoy your time away knowing
          your pets are safe, happy and cared for.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Peace of Mind Wherever You Are
        </h2>

        <p>
          Whether you're spending the day at work, travelling for business or
          enjoying a holiday, we'll care for your pets as if they were our own.
          Every visit is tailored to your pet's individual routine, personality
          and needs.
        </p>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/dog-walking-penkridge"
          className="block font-semibold hover:underline"
        >
          🐕 Dog Walking Services →
        </a>

        <a
          href="/dog-boarding-penkridge"
          className="block font-semibold hover:underline"
        >
          🏡 Dog Boarding →
        </a>

        <a
          href="/summer-dog-safety"
          className="block font-semibold hover:underline"
        >
          ☀️ Summer Dog Safety →
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
