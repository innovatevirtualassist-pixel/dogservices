import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Shield, Heart } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Serving Penkridge &amp; Staffordshire</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Dog Walking &amp; Dog Boarding in{" "}
              <span className="text-primary">Penkridge</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Professional dog walking, dog boarding and pet care services in Penkridge and throughout Staffordshire. Whether you're at work, away for the weekend, or planning a holiday, we provide safe, reliable and caring support for your dog. Every walk and boarding stay is tailored to your pet's individual needs, giving owners complete peace of mind while ensuring dogs remain happy, active and well cared for. We provide professional,insured dog walking, dog boarding and pet care services throughout Penkridge, 
              Stafford, Cannock, and the wider Staffordshire area.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Link href="#contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#services">
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span>DBS Checked</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Local to Penkridge</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&q=80"
                alt="Happy golden retriever enjoying a walk in the Staffordshire countryside"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-card">
                    <span className="text-xs font-medium text-primary">🐕</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-card">
                    <span className="text-xs font-medium text-primary">🐕</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-card">
                    <span className="text-xs font-medium text-primary">🐕</span>
                  </div>
                </div>
                <div>
                  <p className="font-serif font-semibold text-card-foreground">300+</p>
                  <p className="text-xs text-muted-foreground">Happy Dogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
