import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Summer Dog Safety Tips | Penkridge Dog Services",
  description:
    "Learn how to keep dogs safe during hot weather in Penkridge and Staffordshire. Advice on hot pavements, hydration, heatstroke signs and safe summer walks.",
  alternates: {
    canonical:
      "https://www.penkridgedogservices.co.uk/summer-dog-safety",
  },
}

export default function SummerDogSafetyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <a
        href="/"
        className="inline-block mb-8 text-sm font-semibold hover:underline"
      >
        ← Back to Penkridge Dog Services
      </a>


      <h1 className="text-4xl font-bold mb-10">
        Summer Dog Safety Tips ☀️🐾
      </h1>


      <article>

        <h2 className="text-2xl font-semibold mb-4">
          Avoid Hot Pavements During Summer Walks
        </h2>


        <p>
          Warm weather is wonderful for enjoying the outdoors, but hot
          pavements and tarmac can become dangerous for dogs. Their paw pads
          are sensitive and can burn quickly on hot surfaces.
        </p>


        <p className="mt-4">
          A simple rule is to place the back of your hand on the pavement for
          several seconds. If it feels too hot for your hand, it is too hot for
          your dog's paws.
        </p>


        <p className="mt-4">
          During warmer days, we choose grassy routes, shaded footpaths and
          cooler walking times around Penkridge to help keep dogs comfortable
          and safe.
        </p>


        <img
          src="/images/hot-pavement-dog-walk.jpg"
          alt="Dog walking safely during summer in Penkridge Staffordshire"
          className="rounded-xl mt-8 w-full"
        />


        <h3 className="text-xl font-semibold mt-8">
          Choose Cooler Walking Times
        </h3>


        <p>
          Early morning and later evening walks are often the safest options
          during hot weather. Temperatures are lower, pavements have cooled
          down and dogs can enjoy their walks more comfortably.
        </p>


        <p className="mt-4">
          Some days may simply be too warm for longer walks. Shorter walks
          combined with indoor enrichment can be a much safer alternative.
        </p>


        <h3 className="text-xl font-semibold mt-8">
          Indoor Play Can Be Just As Fun 🏠🐶
        </h3>


        <p>
          Dogs do not always need long outdoor adventures to stay happy.
          Indoor games, training sessions, scent work, puzzle toys and
          enrichment activities provide excellent mental stimulation while
          avoiding the risks of extreme heat.
        </p>


        <p className="mt-4">
          Sometimes the safest place for playtime is simply inside the house
          where dogs can stay cool, relaxed and comfortable.
        </p>


        <h3 className="text-xl font-semibold mt-8">
          Signs of Heatstroke in Dogs
        </h3>


        <p>
          Heatstroke is a serious emergency that can develop quickly. Look out
          for these warning signs:
        </p>


        <ul className="list-disc ml-6 mt-3">
          <li>Excessive panting</li>
          <li>Heavy drooling</li>
          <li>Bright red gums or tongue</li>
          <li>Weakness or tiredness</li>
          <li>Vomiting or diarrhoea</li>
          <li>Difficulty walking</li>
          <li>Disorientation</li>
          <li>Collapse</li>
        </ul>


        <h3 className="text-xl font-semibold mt-8">
          What To Do If A Dog Has Heatstroke
        </h3>


        <p>
          If you suspect heatstroke, act quickly:
        </p>


        <ul className="list-disc ml-6 mt-3">
          <li>Move the dog to a cool shaded area</li>
          <li>Offer small amounts of cool drinking water</li>
          <li>Cool the dog gradually with cool (not ice cold) water</li>
          <li>Use airflow or a fan if available</li>
          <li>Contact your vet immediately</li>
        </ul>


        <p className="mt-6">
          Avoid using ice or extremely cold water as rapid cooling can cause
          complications. Even if a dog appears better, veterinary advice should
          still be sought as heatstroke can cause serious internal damage.
        </p>


        <p className="mt-8">
          Keeping dogs safe in summer is about choosing cooler times, checking
          surfaces and knowing when to slow down. With a little extra care,
          dogs can still enjoy summer safely. ❤️🐶
        </p>


      </article>


      <div className="mt-10 space-y-4">

        <a
          href="/recent-walks"
          className="block font-semibold hover:underline"
        >
          ← Read our latest dog care updates
        </a>


        <a
          href="/local-dog-walks"
          className="block font-semibold hover:underline"
        >
          🐾 Explore our favourite dog walking spots around Penkridge →
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