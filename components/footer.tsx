import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Solo Dog Walks", href: "#services" },
    { name: "Group Dog Walks", href: "#services" },
    { name: "Home Dog Boarding", href: "#services" },
    { name: "Daycare Services", href: "#services" },
    { name: "Puppy Visits", href: "#services" },
    { name: "Senior Dog Care", href: "#services" },
  ],
  areas: [
    { name: "Penkridge", href: "#contact" },
    { name: "Stafford", href: "#contact" },
    { name: "Cannock", href: "#contact" },
    { name: "Acton Trussell", href: "#contact" },
    { name: "Dunston", href: "#contact" },
    { name: "Brewood", href: "#contact" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">PDS</span>
              </div>
              <span className="font-serif font-semibold text-xl text-background">
                Penkridge Dog Services
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              Reliable dog walking and boarding services in Penkridge, Staffordshire. 
              Trusted by local families since 2018.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/groups/1419374572915904/?ref=share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Areas Covered</h3>
            <ul className="space-y-2">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Penkridge, Staffordshire, ST19</span>
              </li>
              <li>
                <a
                  href="tel:+447427684740"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>07427684740</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:penkridgedogservices@gmail.com"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>penkridgedogservices@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Penkridge Dog Services. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
