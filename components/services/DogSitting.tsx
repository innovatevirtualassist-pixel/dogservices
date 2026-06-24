export default function DogSitting() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-16 py-20 space-y-24">

        {/* HERO */}
        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Dog Sitting in Penkridge, Staffordshire
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg text-gray-700 leading-8">
              Looking for reliable dog sitting in Penkridge? We provide trusted,
              professional dog sitting services designed to keep your dog safe,
              comfortable and cared for while you're away.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Trusted Local Dog Sitting
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-gray-700 leading-8">
              As a local dog sitter in Penkridge, we understand how important it is
              to provide consistent, caring support for your dog.
            </p>

            <p className="text-lg text-gray-700 leading-8">
              We maintain your dog’s normal routine to keep them relaxed and stress-free.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              What Our Service Includes
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Feeding and fresh water</li>
              <li>Regular walks and exercise</li>
              <li>Playtime and stimulation</li>
              <li>Companionship and supervision</li>
              <li>Medication if required</li>
              <li>Daily updates with photos</li>
            </ul>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Why Dog Sitting Matters
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-gray-700 leading-8">
              Dogs can become anxious when left alone for long periods.
              Professional sitting reduces stress and boredom.
            </p>

            <p className="text-lg text-gray-700 leading-8">
              Your dog gets attention, exercise and companionship throughout the day.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Why Choose Us?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Local Penkridge-based sitter</li>
              <li>Fully insured & DBS checked</li>
              <li>Flexible daytime or overnight care</li>
              <li>Experience with all breeds</li>
              <li>Caring and structured environment</li>
              <li>Daily updates</li>
            </ul>
          </div>
        </section>

        {/* AREAS */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Areas We Cover
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 leading-8">
              Penkridge, Stafford, Cannock, Acton Trussell, Dunston, Brewood and surrounding villages.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Caring for Dogs Like Family
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 leading-8">
              Every dog is treated with patience, care and attention.
              We take time to understand their routine and personality.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl bg-green-50 p-10 rounded-2xl space-y-4">
          <h2 className="text-3xl font-semibold">
            Book Dog Sitting in Penkridge Today
          </h2>

          <p className="text-lg text-gray-700">
            Contact us today to arrange a meet & greet and discuss your dog’s needs.
          </p>

          <a
            href="/contact"
            className="inline-flex bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Book Dog Sitting
          </a>
        </section>

      </div>
    </main>
  );
}