import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choosing the Right Dog Toys | Penkridge Dog Services",
  description:
    "Learn how to choose safe, fun and enriching toys for your dog. Discover the benefits of different dog toys and which ones to avoid.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/choosing-the-right-dog-toys",
  },
};

export default function ChoosingDogToysPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Choosing the Right Toys for Your Dog 🧸🐶
      </h1>

      <article>

        <p>
          Toys are much more than just entertainment. The right toys can help
          reduce boredom, provide mental stimulation, encourage healthy
          exercise and strengthen the bond between you and your dog. Every dog
          has different preferences, so offering a variety of safe toys keeps
          playtime exciting and rewarding.
        </p>

        <img
          src="/images/dog-toys.jpg"
          alt="Happy dog surrounded by colourful toys"
          className="rounded-xl mt-8 w-full"
        />

        <p className="mt-3 text-sm">
          Every dog has a favourite toy—and discovering what they enjoy is part
          of the fun.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Benefits of Dog Toys
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Provides mental stimulation.</li>
          <li>Helps prevent boredom and destructive behaviour.</li>
          <li>Encourages healthy physical exercise.</li>
          <li>Builds confidence in puppies and nervous dogs.</li>
          <li>Supports training and positive reinforcement.</li>
          <li>Strengthens the bond between dogs and owners.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          Great Toy Ideas
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Interactive puzzle toys.</li>
          <li>Treat-dispensing enrichment toys.</li>
          <li>Soft comfort toys for cuddling.</li>
          <li>Durable rubber chew toys.</li>
          <li>Fetch balls designed for dogs.</li>
          <li>Rope toys for supervised tug games.</li>
          <li>Snuffle mats for scent work.</li>
        </ul>

        <img
          src="/images/dog-playing-toys.jpg"
          alt="Dog enjoying enrichment toys"
          className="rounded-xl mt-10 w-full"
        />

        <h2 className="text-2xl font-semibold mt-10">
          Toys to Avoid
        </h2>

        <p>
          Not every toy sold for dogs is suitable for every breed or chewing
          style. Always supervise play and regularly inspect toys for damage.
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Broken toys with loose pieces.</li>
          <li>Toys small enough to become a choking hazard.</li>
          <li>Cheap toys that split easily.</li>
          <li>Children's toys not designed for dogs.</li>
          <li>Toys with loose strings, ribbons or detachable eyes.</li>
          <li>Very hard objects that may damage teeth.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          Rotate Toys Regularly
        </h2>

        <p>
          Dogs don't need dozens of toys available all at once. Rotating a
          small selection every few days makes old toys feel exciting again and
          keeps dogs mentally engaged.
        </p>

        <video
          controls
          poster="/images/dog-toys.jpg"
          className="rounded-xl mt-10 w-full"
        >
          <source
            src="/videos/dog-toys.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

        <p className="mt-3 text-sm">
          Playtime is one of the best ways to keep dogs active, stimulated and
          happy.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Our Favourite Toys
        </h2>

        <p>
          At Penkridge Dog Services, we love seeing dogs enjoy enrichment toys,
          puzzle feeders, tennis balls, tug toys and soft comfort toys. Every
          dog is different, so we always encourage owners to find toys that
          match their dog's age, size, personality and play style.
        </p>

        <p className="mt-8">
          Safe toys, regular exercise and plenty of love help dogs stay happy,
          healthy and mentally stimulated every day. ❤️🐾
        </p>

      </article>

      <div className="mt-12 rounded-xl border bg-gray-50 p-6">

        <h2 className="text-2xl font-bold mb-4">
          You May Also Like
        </h2>

        <ul className="space-y-3">

          <li>
            <a href="/dog-grooming" className="font-semibold hover:underline">
              🛁 Dog Grooming Tips →
            </a>
          </li>

          <li>
            <a href="/summer-dog-safety" className="font-semibold hover:underline">
              ☀️ Summer Dog Safety →
            </a>
          </li>

          <li>
            <a href="/travelling-with-your-dog" className="font-semibold hover:underline">
              🚗 Travelling Safely With Your Dog →
            </a>
          </li>

          <li>
            <a href="/weather-penkridge" className="font-semibold hover:underline">
              🌦️ Check Today's Weather in Penkridge →
            </a>
          </li>

          <li>
            <a href="/contact" className="font-semibold hover:underline">
              ❤️ Contact Penkridge Dog Services →
            </a>
          </li>

        </ul>

      </div>

    </main>
  );
}
