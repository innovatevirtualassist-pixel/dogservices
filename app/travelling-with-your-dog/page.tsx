import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Travelling Safely With Your Dog | Tips & Advice | Penkridge Dog Services",
  description:
    "Planning a trip with your dog? Discover practical travel tips, car safety advice, packing essentials and ways to keep your dog happy on every journey.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/travelling-with-your-dog",
  },
}

export default function TravellingWithYourDogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>

      <h1 className="text-4xl font-bold mb-10">
        Travelling Safely With Your Dog 🚗🐶
      </h1>

      <article>

        <p>
          Whether you're heading to the countryside, visiting family or planning
          a seaside adventure, travelling with your dog can be one of life's
          greatest pleasures. A little preparation goes a long way in making the
          journey safe, comfortable and enjoyable for everyone.
        </p>

        <p className="mt-3 text-sm">
          Safe travel starts before you even set off.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Secure Your Dog Properly
        </h2>

        <p>
          Dogs should never travel loose inside a moving vehicle. Using a
          properly fitted harness, travel crate or dog guard helps keep both
          your pet and passengers safe during sudden braking or unexpected
          situations.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Pack A Dog Travel Bag
        </h2>

        <p>Before leaving, remember to pack:</p>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Fresh drinking water</li>
          <li>Portable water bowl</li>
          <li>Lead and spare lead</li>
          <li>Poo bags</li>
          <li>Favourite toy</li>
          <li>Treats</li>
          <li>Food for the day</li>
          <li>Towel</li>
          <li>Medication if required</li>
        </ul>

        <img
          src="/images/dog-travel-bag.jpg"
          alt="Dog travel essentials packed for a road trip"
          className="rounded-xl mt-10 w-full"
        />

        <h2 className="text-2xl font-semibold mt-10">
          Take Regular Breaks
        </h2>

        <p>
          On longer journeys, stop every couple of hours to allow your dog to
          stretch their legs, have a drink of water and enjoy a short toilet
          break before continuing your journey.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Never Leave Dogs In A Parked Car
        </h2>

        <p>
          Even on mild days, the temperature inside a parked vehicle can rise
          dangerously within minutes. If you're unable to take your dog with
          you, it's safest to leave them at home.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Holiday Accommodation
        </h2>

        <p>
          Before travelling, check that your accommodation welcomes dogs and
          understand any rules regarding leads, exercise areas or restricted
          spaces. Many hotels, cottages and campsites now provide excellent
          facilities for four-legged guests.
        </p>

        <p className="mt-3 text-sm">
          Every journey becomes another adventure when dogs travel safely.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          Pro Travel Tips
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Exercise your dog before setting off.</li>
          <li>Feed smaller meals before travelling.</li>
          <li>Carry plenty of fresh water.</li>
          <li>Keep your dog's ID tag up to date.</li>
          <li>Take familiar bedding to help them settle.</li>
          <li>Research local vets if travelling far from home.</li>
          <li>Check beach or countryside dog restrictions before visiting.</li>
          <li>Always clean up after your dog.</li>
        </ul>

        <div className="rounded-xl bg-green-50 border border-green-300 p-6 mt-10">
          <h2 className="text-2xl font-semibold">
            Our Favourite Advice ❤️
          </h2>

          <p className="mt-4">
            Dogs don't care how far you travel—they simply love being with the
            people they trust. Whether it's a five-minute drive to the park or a
            family holiday in Wales, travelling safely means more happy memories
            together.
          </p>
        </div>

      </article>

      <div className="mt-10 space-y-4">

        <a
          href="/beach-adventures"
          className="block font-semibold hover:underline"
        >
          🏖️ Beach Adventure Ideas →
        </a>

        <a
          href="/summer-dog-safety"
          className="block font-semibold hover:underline"
        >
          ☀️ Summer Dog Safety →
        </a>

        <a
          href="/local-dog-walks"
          className="block font-semibold hover:underline"
        >
          🌿 Favourite Local Walks →
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
