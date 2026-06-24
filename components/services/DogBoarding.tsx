export default function DogBoarding() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 space-y-32">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-green-700">
            Dog Boarding
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Professional Dog Boarding in Penkridge, Staffordshire
          </h1>

          <p className="text-xl leading-9 text-gray-600 max-w-3xl mx-auto">
              Looking for safe and reliable dog boarding in Penkridge? We provide
              professional home-from-home dog boarding services where your dog is
              cared for in a calm, secure and family environment.
            </p>
        </section>

        {/* INTRO */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              A Home-from-Home Dog Boarding Experience
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg leading-8 text-gray-700">
              Our dog boarding service in Penkridge is designed to feel as close to
              home as possible. We create a calm, welcoming environment where
              dogs can relax, play and settle comfortably during their stay.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Every dog has their own personality, routine and needs. We take the
              time to understand feeding, exercise and comfort requirements to
              deliver personalised care.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              Why Choose Our Dog Boarding Service?
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Home-from-home boarding environment</li>
              <li>Fully insured and DBS checked</li>
              <li>Daily walks and enrichment</li>
              <li>24/7 supervision</li>
              <li>Regular owner updates</li>
            </ul>
          </div>
        </section>

        {/* DAILY ROUTINE */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold">
              What Your Dog’s Stay Looks Like
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg leading-8 text-gray-700">
              Every stay is structured around your dog’s individual needs. 
              We provide a structured but flexible routine including regular walks,
              feeding, playtime, rest periods and plenty companionship throughout the day.
            </p>

            <p  className="text-lg leading-8 text-gray-700">
              Our aim is to maintain familiar routines so your dog feels safe, comfortable and settled whilst your away.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Benefits of Dog Boarding
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg leading-8 text-gray-700">
              Professional dog boarding provides companionship, exercise,
              structure and mental stimulation while you're away.
            </p>

           <p className="text-lg leading-8 text-gray-700">
              Dogs remain active, cared for and supported in a safe environment,
              helping reduce stress and separation anxiety.
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
              We provide dog boarding services throughout Penkridge, Stafford, Cannock, Brewood, Acton Trussell, Dunston and
              surrounding Staffordshire villages.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Caring for Your Dog Like Family
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-lg leading-8 text-gray-700">
              Every dog is treated like family, with patience, care and
              individual attention throughout their stay. We build trust with
              both dogs and owners through consistent, compassionate care.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto bg-green-50 border border-green-100 rounded-3xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-semibold tracking-tight">
            Book Dog Boarding in Penkridge Today
          </h2>

          <p className="text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
            Arrange a free meet and greet and discover why local dog owners trust
            us to care for their dogs while they're away.
          </p>  

          <a
             href="/contact"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
          >
            Enquire Now
          </a>
        </section>

      </div>
    </main>
  );
}