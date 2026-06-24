export default function DogWalking() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-16 py-20 space-y-28">

        {/* HERO */}
        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Professional Dog Walking in Penkridge, Staffordshire
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg leading-8 text-gray-700">
              Reliable, friendly and fully insured dog walking for busy owners across
              Penkridge and surrounding Staffordshire areas.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              A Trusted Local Dog Walker in Penkridge
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg leading-8 text-gray-700">
              As a local dog walking service, we understand how important it is to
              trust the person caring for your dog.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Whether your dog needs long countryside adventures or calm local strolls,
              we tailor every walk to their energy level and personality.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Why Choose Our Dog Walking Service?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>✓ Local Penkridge-based dog walker</li>
              <li>✓ Fully insured & DBS checked</li>
              <li>✓ Solo or small group walks</li>
              <li>✓ Experience with all ages & breeds</li>
              <li>✓ Safe, structured walking routes</li>
              <li>✓ Flexible scheduling</li>
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Benefits of Regular Dog Walking
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg leading-8 text-gray-700">
              Regular walks improve physical health, reduce anxiety and help prevent
              behavioural issues.
            </p>
          </div>
        </section>

        {/* AREAS */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Areas We Cover
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg leading-8 text-gray-700">
              Penkridge, Stafford, Cannock, Acton Trussell, Dunston, Brewood and
              surrounding villages.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Caring for Dogs Like Family
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg leading-8 text-gray-700">
              Every dog is treated with patience, care and attention.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl bg-green-50/60 border border-green-100 p-10 rounded-2xl space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight">
            Book a Dog Walk in Penkridge Today
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Get in touch to arrange a free meet & greet.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Enquire Now
          </a>
        </section>

      </div>
    </main>
  );
}