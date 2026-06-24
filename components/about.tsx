import { Shield, Award, Clock, Heart, MapPin, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive pet care insurance for your complete peace of mind.",
  },
  {
    icon: Award,
    title: "DBS Checked",
    description: "All team members are fully vetted with enhanced DBS checks.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "We always arrive on time and keep to agreed schedules.",
  },
  {
    icon: Heart,
    title: "Genuine Passion",
    description: "We are not just dog walkers – we are dog lovers through and through.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description: "We know all the best walks in Penkridge and the surrounding areas.",
  },
  {
    icon: Users,
    title: "Trusted by Locals",
    description: "Recommended by hundreds of Penkridge families.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&h=500&fit=crop&q=80"
                alt="Two happy dogs running together through a green field in Staffordshire"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">300+</p>
                  <p className="text-sm text-muted-foreground">Happy Dogs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
              Your Local Dog Care Experts in Penkridge
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded by lifelong dog lovers and Penkridge locals, we understand that your dog 
              is part of your family. Thats why we treat every dog in our care as if they 
              were our own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you need daily walks while you're at work, or a safe, loving home 
              for your dog while you're on holiday, we're here to help. We serve 
              families across Penkridge, Stafford, Cannock, and the wider Staffordshire area.
            </p>

            {/* Features grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
