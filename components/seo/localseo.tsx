import Link from "next/link"

export function LocalSeo() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        

        {/* HERO SEO BLOCK */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Professional Dog Services in Penkridge
          </h2>

           <p className="text-2xl font-serif font-semibold text-foreground">
            including Dog Walking, Dog Boarding & Dog Grooming in Penkridge, Staffordshire
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            At Penkridge Dog Services, we provide trusted, professional dog walking, dog boarding and dog sitting
            services across Penkridge, Stafford and surrounding Staffordshire villages. Our focus is on safe,
            reliable and personalised dog care tailored to each dog’s routine, personality and lifestyle.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you need daily dog walks, home-from-home dog boarding, or flexible dog sitting services,
            we ensure your dog receives consistent exercise, companionship, stimulation and loving care from a
            local, experienced and fully insured dog care provider.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our service is ideal for busy dog owners, professionals working long hours, families going on holiday,
            or anyone who wants complete peace of mind knowing their dog is safe, happy and well cared for in their absence.
          </p>
          <div className="mx-auto max-w-5xl px-6 space-y-8"></div>
        </div>

        {/* SERVICES */}
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-foreground">
            Dog Care Services in Penkridge
          </h3>

          <div className="space-y-8">

            <div>
              <h4 className="font-semibold text-foreground">
                Dog Walking Services in Penkridge
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
              
                Our dog walking service provides structured, stimulating walks tailored to your dog’s age,
                breed, energy level and personality. We help improve fitness, reduce boredom and support
                behavioural balance through regular exercise and outdoor enrichment.
              </p>
              <Link href="/dog-walking-penkridge" className="text-primary hover:underline font-medium">
                View dog walking services →
              </Link>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">
                Dog Boarding Services in Penkridge
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our home-from-home dog boarding service provides a safe, comfortable and loving environment
                where your dog is treated like family. We maintain routines, offer regular exercise, feeding schedules
                and companionship to ensure a stress-free stay.
              </p>
              <Link href="/dog-boarding-penkridge" className="text-primary hover:underline font-medium">
                View dog boarding services →
              </Link>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">
                Dog Sitting Services in Penkridge
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dog sitting service is perfect for dogs who prefer staying in their own familiar environment.
                We provide in-home visits, feeding, walks, playtime and companionship to ensure comfort and routine continuity.
              </p>
              <Link href="/dog-sitting-penkridge" className="text-primary hover:underline font-medium">
                View dog sitting services →
                <div className="mx-auto max-w-5xl px-6 space-y-8"></div>
              </Link>
            </div>

          </div>
        </div>

        {/* EXTENDED SEO PARAGRAPH */}
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-foreground">
            
            Trusted Local Dog Care in Staffordshire
          </h3>

          <p>
            We are proud to support dog owners throughout Penkridge, Stafford, Cannock, Brewood, Acton Trussell,
            Dunston and surrounding Staffordshire communities. As a local dog care provider, we understand the importance
            of reliability, consistency and trust when it comes to looking after your pets.
          </p>

          <p>
            Every dog we care for is treated with patience, attention and genuine affection. We take time to understand
            each dog’s behaviour, routine and emotional needs so we can provide the highest level of personalised care.
          </p>

          <p>
            With full insurance, DBS checks and years of hands-on experience with dogs of all breeds and ages,
            we offer professional pet care services that give owners complete peace of mind.
            <div className="mx-auto max-w-5xl px-6 space-y-8"></div>
          </p>
        </div>
        <div className="space-y-12"></div>
        {/* AREAS */}
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-foreground">
            Areas We Cover
          </h3>

          <p className="text-muted-foreground">
            We provide dog walking, dog boarding and dog sitting services across Penkridge, Stafford, Cannock,
            Acton Trussell, Dunston, Brewood and surrounding Staffordshire villages.
          </p>

          <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-foreground">
            <li>✓ Penkridge</li>
            <li>✓ Stafford</li>
            <li>✓ Cannock</li>
            <li>✓ Acton Trussell</li>
            <li>✓ Dunston</li>
            <li>✓ Brewood</li>
            <div className="mx-auto max-w-5xl px-6 space-y-8"></div>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-foreground">
            Why Choose Penkridge Dog Services
          </h3>

          <p className="text-muted-foreground">
            Choosing someone to care for your dog is an important decision. That’s why we focus on trust,
            reliability and genuine compassion in everything we do. We believe every dog deserves individual
            attention, structured care and a calm, positive environment.
          </p>

          <p className="text-muted-foreground">
            Our reputation is built on consistency, communication and a true love for animals.
            Whether it’s daily walks, overnight boarding or occasional sitting, your dog is always in safe hands.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/dog-boarding-penkridge" className="text-primary hover:underline">
              Dog boarding services
            </Link>

            <Link href="/dog-sitting-penkridge" className="text-primary hover:underline">
              Dog sitting services
            </Link>

            <Link href="/dog-walking-penkridge" className="text-primary hover:underline">
              Dog walking services
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}