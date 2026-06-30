import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LocalSeo } from "@/components/seo/localseo"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/seo/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocalSeo />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <section className="max-w-5xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold mb-6">
    Latest Dog Walks & Care Tips 🐾
  </h2>

  <p className="mb-8 text-lg">
    Follow our latest dog walks, local Penkridge adventures and helpful dog
    care advice.
  </p>


  <div className="grid md:grid-cols-2 gap-6">


    <a
      href="/recent-walks"
      className="rounded-xl border p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-3">
        Recent Walks & Dog Care Tips 🌞
      </h3>

      <p>
        See our latest updates, seasonal advice and ways we keep dogs happy
        and safe.
      </p>
    </a>


    <a
      href="/local-dog-walks"
      className="rounded-xl border p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-3">
        Favourite Local Dog Walks 🌿
      </h3>

      <p>
        Explore some of our favourite walking areas around Penkridge and
        Staffordshire.
      </p>
    </a>

<a
      href="/summer-dog-safety"
      className="rounded-xl border p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-3">
       ☀️ Summer Dog Safety Tips
      </h3>

      <p>
        Learn about hot pavements, heatstroke signs and keeping dogs cool during
    summer walks in Penkridge.
      </p>
    </a>

    <a
  href="/how-to-introduce-dogs"
  className="rounded-xl border p-6 hover:shadow-lg transition"
>
  <h3 className="text-xl font-semibold mb-3">
    How to Introduce Dogs Safely 🐶🐾
  </h3>

  <p>
    Helpful tips on introducing dogs to each other, reading body language and
    creating positive experiences for new friendships.
  </p>
</a>
    <a
  href="/kitchen-floor-club"
  className="rounded-xl border p-6 hover:shadow-lg transition"
>
  <h3 className="text-xl font-semibold mb-3">
    Kitchen Floor Club ❄️🐶
  </h3>

  <p>
    Too hot outside? Discover why the coolest place in the house has become
    every dog's favourite summer hangout.
  </p>
</a>

    <a
  href="/beach-adventures"
  className="rounded-xl border p-6 hover:shadow-lg transition"
>
  <h3 className="text-xl font-semibold mb-3">
    Beach Adventures 🏖️🐶
  </h3>

  <p>
    Looking for your next dog-friendly day out? Discover why a beach adventure
    is the perfect way to let your dog explore, play and make unforgettable
    memories.
  </p>
</a>
    
  </div>

</section>
      </main>
      <Footer />
    </>
    
  )
}
