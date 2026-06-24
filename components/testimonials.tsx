import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/reviews"



export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Rover Reviews
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            Loved by Dogs & Their Owners Across Staffordshire
          </h2>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Real Rover reviews from local dog boarding and dog sitting clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-6">

                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* 👇 ADDED THIS (service + date) */}
                <p className="text-xs text-muted-foreground mb-2">
                  {t.service} • {t.date}
                </p>

                {/* Review text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.text}
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    {t.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {t.dog}
                  </p>

                  <p className="text-sm text-primary">
                    {t.location}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-medium">
              5.0 Rover Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
