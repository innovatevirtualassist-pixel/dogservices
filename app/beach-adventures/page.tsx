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

  <h2 className="text-2xl font-semibold mb-4">
    Our Beach Adventure at Black Rock Sands, Porthmadog 🏖️🐾
  </h2>

  <p>
    One of our favourite adventures recently was a trip to <strong>Black Rock
    Sands, Porthmadog (LL49 9YB)</strong> in beautiful North Wales. The beach
    offers an incredible stretch of wide, soft sand that's perfect for dogs to
    explore, sniff, run and simply enjoy being outdoors.
  </p>

  <p className="mt-4">
    We absolutely loved watching our dog race across the beach, roll happily in
    the sand and enjoy plenty of zoomies with the sea stretching out in the
    background. There's something special about seeing a dog experience such a
    huge open space with so many exciting sights, sounds and smells.
  </p>

  <img
    src="/images/black-rock-sands-sign.jpg"
    alt="Welcome sign at Black Rock Sands, Porthmadog"
    className="rounded-xl mt-8 w-full"
  />

  <p className="mt-3 text-sm">
    Black Rock Sands welcomes visitors with excellent facilities and beautiful
    scenery.
  </p>

  <p className="mt-8">
    One thing that really stood out to us was how well equipped the beach is.
    It was reassuring to see a publicly accessible defibrillator on site,
    together with convenient parking and toilet facilities. Having these
    amenities nearby offers extra peace of mind when spending the day out with
    your four-legged companion.
  </p>

  <img
    src="/images/black-rock-sands-defibrillator.jpg"
    alt="Defibrillator available at Black Rock Sands"
    className="rounded-xl mt-8 w-full"
  />

  <h2 className="text-2xl font-semibold mt-10">
    Plenty of Room for Zoomies
  </h2>

  <p>
    Black Rock Sands does have seasonal dog restrictions, so it's always worth
    checking the current rules before visiting. Even so, the beach is so vast
    that there was still an enormous amount of space where dogs could enjoy
    themselves responsibly.
  </p>

  <p className="mt-4">
    The soft sand made the perfect playground for rolling around, chasing after
    toys and burning off energy. Watching happy zoomies across the beach was
    definitely one of the highlights of our visit.
  </p>

  <img
    src="/images/happy-dog-black-rock-sands.jpg"
    alt="Happy dog enjoying Black Rock Sands beach"
    className="rounded-xl mt-8 w-full"
  />

  <video
    controls
    poster="/images/happy-dog-black-rock-sands.jpg"
    className="rounded-xl mt-10 w-full"
  >
    <source
      src="/videos/dog-zoomies-black-rock-sands.mp4"
      type="video/mp4"
    />
    Your browser does not support video.
  </video>

  <p className="mt-3 text-sm">
    Nothing beats watching a happy dog enjoy the freedom of the beach.
  </p>

  <h2 className="text-2xl font-semibold mt-10">
    Our Tips Before You Visit
  </h2>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Check the latest seasonal dog restrictions before travelling.</li>
    <li>Bring plenty of fresh drinking water.</li>
    <li>Discourage dogs from drinking seawater.</li>
    <li>Take regular breaks, especially on warm days.</li>
    <li>Rinse sand and saltwater from your dog before heading home.</li>
    <li>Leave the beach exactly as you found it by cleaning up after your dog.</li>
  </ul>

  <p className="mt-8">
    We thoroughly enjoyed our visit to Black Rock Sands and would happily
    recommend it to anyone looking for a memorable dog-friendly day out in North
    Wales. The combination of stunning scenery, huge open spaces and excellent
    facilities made it a wonderful adventure that we'll definitely be returning
    to.
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
