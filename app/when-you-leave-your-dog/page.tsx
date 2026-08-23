import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title:
    "How to Help Your Dog Feel Comfortable When You're Away | Penkridge Dog Services",
  description:
    "Simple ways to help your dog feel calm, comfortable and secure when you leave them home alone.",
}

export default function WhenYouLeaveYourDogPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">

          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Penkridge Dog Services
          </Link>

          <div className="mt-8">

            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Dog Care Advice
            </p>

            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              Helping Your Dog Feel Less Alone When You Leave
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Leaving your dog can sometimes feel harder for you than it does
              for them. With a little preparation, you can help your dog feel
              safe, settled and confident while you're away.
            </p>

          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction + image */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">

            <Image
              src="/images/dog-feeling-safe-home-alone-penkridge.jpg"
              alt="Dog feeling safe and comfortable at home while alone"
              width={1200}
              height={800}
              priority
              className="w-full aspect-[3/2] object-cover"
            />

            <div className="p-8">

              <h2 className="text-2xl font-serif font-semibold mb-4">
                Dogs notice when we leave
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Dogs are social animals and many enjoy having their people
                around. Some dogs are perfectly happy relaxing while you're
                out, while others may need more support learning that being
                alone is safe.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                The aim isn't to make your dog feel that they never need you.
                It's to help them understand that you leaving is temporary and
                that you will come back.
              </p>

            </div>
          </div>

          {/* Tips */}
          <div>

            <h2 className="text-3xl font-serif font-semibold mb-8">
              7 ways to help your dog feel comfortable
            </h2>

            <div className="space-y-6">

              {/* 1 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Create a calm leaving routine
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Try to keep departures calm and predictable. If leaving
                      the house becomes a dramatic event every time, your dog
                      may start to associate your departure with something
                      worrying.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      A relaxed and familiar routine can help make leaving feel
                      like an ordinary part of the day.
                    </p>

                  </div>
                </div>
              </article>

              {/* 2 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Leave them with something positive
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      One little routine I always like to use is leaving a
                      chew or a small treat just before I head out the door.
                      It gives the dog something positive to focus on as I
                      leave and helps make that moment feel calm and familiar.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      It doesn't have to be anything complicated — a favourite
                      chew, a safe enrichment toy or a little treat can be
                      enough. Always make sure anything you leave with your dog
                      is suitable for them and supervise new chews or toys
                      initially.
                    </p>

                  </div>
                </div>
              </article>

              {/* 3 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Make their space feel safe
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Give your dog access to a comfortable area where they
                      normally like to rest. Their bed, familiar blanket and
                      favourite toys can help make the space feel reassuring.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Keeping their environment familiar can help them settle
                      more easily once you have left.
                    </p>

                  </div>
                </div>
              </article>

              {/* 4 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Give them a good walk before you leave
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      I always try to walk the dogs before leaving them for a
                      while. A good walk gives them an opportunity to exercise,
                      sniff and explore before settling down at home.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      I then give them a little time to settle before heading
                      out. Just as I'm about to leave, I'll leave them with a
                      safe chew or a little treat so they have something
                      positive to enjoy while I go.
                    </p>

                  </div>
                </div>
              </article>

              {/* 5 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    5
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Practise short periods apart
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If your dog finds being alone difficult, gradually
                      practising short periods apart can be more helpful than
                      suddenly leaving them for a long time.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Build up slowly and stay within what your dog can
                      comfortably manage. Every dog is different, so there is
                      no need to rush the process.
                    </p>

                  </div>
                </div>
              </article>

              {/* 6 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    6
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Don't make coming home a big event
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      It's lovely to see your dog when you return, but keeping
                      the first few moments calm can help reinforce the idea
                      that departures and arrivals are normal parts of the day.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Once you've settled back in, you can of course enjoy all
                      the cuddles and excitement!
                    </p>

                  </div>
                </div>
              </article>

              {/* 7 */}
              <article className="rounded-2xl border border-border p-6">
                <div className="flex items-start gap-5">

                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    7
                  </span>

                  <div className="flex-1 min-w-0">

                    <h3 className="text-xl font-semibold leading-snug">
                      Consider a dog walker or sitter
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      If you're going to be away for longer than your dog is
                      comfortable with, a trusted dog walker or pet sitter can
                      provide companionship, exercise and a break during the
                      day.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                      For some dogs, having someone familiar visit during the
                      day can make being apart from their family much easier.
                    </p>

                  </div>
                </div>
              </article>

            </div>
          </div>

          {/* Reassurance */}
          <div className="rounded-2xl bg-muted p-8">

            <h2 className="text-2xl font-serif font-semibold mb-4">
              Every dog is different 🐾
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Some dogs happily settle down for a nap as soon as you leave.
              Others may need more time, training and reassurance. There is no
              single routine that works for every dog.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              If your dog becomes extremely distressed when left alone,
              repeatedly tries to escape, destroys things, toilets indoors or
              shows other signs of significant distress, speak with your vet
              or a qualified behaviour professional for individual advice.
            </p>

          </div>

          {/* Services */}
          <section className="rounded-2xl border border-border p-8 text-center">

            <h2 className="text-2xl font-serif font-semibold mb-4">
              Need someone to keep your dog company?
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              If you're going to be out for the day, Penkridge Dog Services
              can help provide your dog with exercise, companionship and
              something positive to look forward to.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                href="/#services"
                className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Our Services
              </Link>

              <Link
                href="/calendar"
                className="rounded-lg border border-border px-6 py-3 font-medium hover:bg-muted transition-colors"
              >
                View Calendar
              </Link>

              <Link
                href="/#contact"
                className="rounded-lg border border-border px-6 py-3 font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>

            </div>

          </section>

          {/* Back links */}
          <div className="flex flex-wrap justify-between gap-4 pt-4">

            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>

            <Link
              href="/how-to-introduce-dogs"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              How to Introduce Dogs Safely →
            </Link>

          </div>

        </div>
      </section>
    </main>
  )
}