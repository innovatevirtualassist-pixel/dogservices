import { Dog, Home, Clock, Users, Sparkles, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dog1 from "@public/dog1.jpg"
import dog2 from "@public/dog2.jpg"
import dog3 from "@public/dog3.jpg"
import Image from "next/image"
import Link from "next/link"


const services = [
  {
    icon: Dog,
    title: "Solo Dog Walks",
    description: "One-on-one attention for your dog with tailored routes around Penkridge's beautiful countryside and local parks.",
    price: "From £15",
    link: "/dog-walking-penkridge",
    features: ["60-minute walks", "GPS tracking", "Photo updates", "Flexible scheduling"],
  },
  {
    icon: Users,
    title: "Group Dog Walks",
    description: "Social walks with carefully matched small groups, perfect for dogs who love company.",
    price: "From £12",
    link: "/dog-walking-penkridge",
    features: ["Small groups (max 4)", "Socialisation focus", "Varied routes", "Daily availability"],
  },
  {
    icon: Home,
    title: "Home Dog Boarding",
    description: "Your dog stays in our loving home environment while you're away. No kennels, just comfort.",
    price: "From £30-40/night",
    link: "/dog-boarding-penkridge",
    features: ["Home from home", "24/7 supervision", "Garden access", "Regular updates"],
  },
  {
    icon: Clock,
    title: "Daycare Services",
    description: "Full or half-day care for dogs who need company during your work hours.",
    price: "From £25/day",
    link: "/dog-sitting-penkridge",
    features: ["Structured activities", "Midday walks", "Rest periods", "Socialisation"],
  },
  {
    icon: Sparkles,
    title: "Puppy Visits",
    description: "Shorter, more frequent visits perfect for puppies still building their stamina and routine.",
    price: "From £15",
    link: "/dog-sitting-penkridge",
    features: ["30-minute visits", "Toilet breaks", "Basic training", "Gentle play"],
  },
  {
    icon: Heart,
    title: "Senior Dog Care",
    description: "Gentle, patient care tailored for older dogs with slower walks and extra attention.",
    price: "From £20",
    link: "/dog-sitting-penkridge",
    features: ["Gentle exercise", "Medication admin", "Extra patience", "Comfort focused"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            Professional Dog Care Services in Penkridge
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From daily walks to overnight stays, we offer comprehensive care tailored to your dogs 
            unique needs. All services available throughout Penkridge and surrounding Staffordshire areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-serif text-xl text-card-foreground">{service.title}</CardTitle>
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">{service.price}</span>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                href={service.link}
                className="inline-block mt-4 text-primary underline text-sm"
                >
                  Learn more
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
  <Image
  src="/dog4.jpg"
  alt="Dogboarding in Penkridge"
  width={800}
  height={600}
  className="rounded-2xl w-full h-64 object-cover shadow-lg"
/>

<Image
  src="/dog2.jpg"
  alt="Dog sitting services"
  width={800}
  height={600}
  className="rounded-2xl w-full h-64 object-cover shadow-lg"
/>

<Image
  src="/dog3.jpg"
  alt="Professional pet care"
  width={800}
  height={600}
  className="rounded-2xl w-full h-64 object-cover shadow-lg"
/>
</div>
        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not sure which service is right for your dog?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Get in touch with us today
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
