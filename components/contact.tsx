"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Penkridge, Staffordshire", "Serving ST19 and surrounding areas"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["07427684740", "Available 9am - 4pm daily"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["penkridgedogservices@gmail.com", "We reply within 24 hours"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sun: 9am - 4pm", "Boarding: 24/7 care"],
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dogName: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Contact Penkridge Dog Services
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Ready to give your dog the care they deserve? Get in touch to arrange a free meet-and-greet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* FORM */}
          <div>
            <Card>
              <CardContent className="p-6 lg:p-8">

                <form
                  action="https://formspree.io/f/mlgkezzo"
                  method="POST"
                  className="space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium">Your Name *</label>
                      <Input name="name" value={formState.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input name="email" value={formState.email} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Phone + Dog */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input name="phone" value={formState.phone} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Dog's Name</label>
                      <Input name="dogName" value={formState.dogName} onChange={handleChange} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-sm font-medium">Service *</label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-3 py-2"
                    >
                      <option value="">Select a service...</option>
                      <option value="walking">Dog Walking</option>
                      <option value="boarding">Dog Boarding</option>
                      <option value="daycare">Daycare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg"
                  >
                    <Send className="w-4 h-4" />
                    Book a Free Meet & Greet
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    We usually reply within a few hours.
                  </p>

                </form>
              </CardContent>
            </Card>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(item => (
                <Card key={item.title}>
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <item.icon className="text-primary w-5 h-5" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        {item.details.map((d, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {d}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* MAP */}
            <div className="h-64 rounded-xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}