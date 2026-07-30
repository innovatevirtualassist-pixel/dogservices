import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helping Dogs Meet Bigger & Older Dogs Safely | Penkridge Dog Services",
  description:
    "Helpful advice on introducing younger, smaller or nervous dogs to bigger and older dogs. Learn how to build confidence and create positive experiences.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/meeting-bigger-dogs",
  },
};

export default function MeetingBiggerDogsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Meeting Bigger & Older Dogs 🐶❤️
      </h1>

      <article>

        <p>
          Meeting a much bigger or older dog for the first time can feel a little
          overwhelming for some puppies and smaller dogs. With calm introductions,
          patience and positive experiences, most dogs quickly learn that larger
          dogs can become wonderful walking companions and lifelong friends.
        </p>

        <img
          src="/images/big-and-small-dogs.jpg"
          alt="Small dog calmly meeting a larger friendly dog"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          Every friendship starts with a calm first introduction.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Let Dogs Meet Naturally
        </h2>

        <p>
          Dogs often feel more comfortable meeting while walking rather than
          standing face to face. Walking in the same direction gives both dogs
          time to observe each other without feeling pressured.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Respect Personal Space
        </h2>

        <p>
          Not every dog wants to say hello immediately. So allow plenty of space,
          keep leads loose where safe to do so, and let the dogs choose when
          they're ready to investigate each other. Some might not even bother at all!
        </p>

        <img
          src="/images/dogs-walking-together.jpg"
          alt="Two dogs enjoying a relaxed walk together"
          className="rounded-xl mt-10 w-full"
        />

        <h2 className="text-2xl font-semibold mt-10">
          Watch Their Body Language
        </h2>

        <p>
          Relaxed tails, soft eyes, loose movements and gentle sniffing are
          positive signs. If either dog becomes stiff, hides behind their owner,
          growls or seems uncomfortable, simply create more space and allow them
          time to settle.
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Stay calm and relaxed.</li>
          <li>Reward calm behaviour with praise. Lots of praise or even treats!</li>
          <li>Never force an introduction.</li>
          <li>Keep first meetings short.</li>
          <li>Finish while both dogs are relaxed.</li>
        </ul>

        <video
          controls
          poster="/images/big-and-small-dogs.jpg"
          className="rounded-xl mt-10 w-full"
        >
          <source
            src="/videos/meeting-bigger-dogs.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

        <p className="mt-3 text-sm">
          Calm introductions help build confidence for both dogs.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Building Confidence Takes Time
        </h2>

        <p>
          Every dog learns at their own pace. Some become instant friends,
          while others need several short meetings before they feel completely
          comfortable. Patience, encouragement and positive experiences are the
          key to successful socialisation.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Our Approach
        </h2>

        <p>
          At Penkridge Dog Services, we always introduce dogs carefully and
          individually. We take time to understand each dog's personality,
          confidence and play style to help every walk remain safe, enjoyable
          and stress-free.
        </p>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/how-to-introduce-dogs"
          className="block font-semibold hover:underline"
        >
          🐶 How to Introduce Dogs Safely →
        </a>

        <a
          href="/dog-walking-penkridge"
          className="block font-semibold hover:underline"
        >
          🐾 Dog Walking Services →
        </a>

        <a
          href="/recent-walks"
          className="block font-semibold hover:underline"
        >
          🌿 Read Our Latest Adventures →
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
