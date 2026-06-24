"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What areas do you cover for dog walking services?",
    answer: "We provide dog walking and boarding services throughout Penkridge and the surrounding Staffordshire areas, including Stafford, Cannock, Acton Trussell, Dunston, Coppenhall, and Huntington. If you're unsure whether we cover your area, please get in touch and we'll be happy to discuss.",
  },
  {
    question: "Are you insured and DBS checked?",
    answer: "Yes, absolutely. We are fully insured and all team members hold enhanced DBS certificates and have completed canine first aid training.",
  },
  {
    question: "How do you keep dogs safe during walks?",
    answer: "Safety is our top priority. We can use GPS tracking on all walks so you can see exactly where your dog has been. We maintain small group sizes (maximum 4 dogs), only walk compatible dogs together, and always assess new dogs before their first group walk. All dogs must be up-to-date on vaccinations.",
  },
  {
    question: "Can you administer medication to my dog?",
    answer: "Yes, we can administer oral medication, apply topical treatments, and manage other medical needs. Please discuss your dog's specific requirements during the initial consultation, and we'll ensure our team is fully briefed on their care needs.",
  },
  {
    question: "What happens during overnight boarding?",
    answer: "Your dog stays in our home as part of the family – no kennels or cages. They'll have access to our secure garden, comfortable sleeping areas, and plenty of attention. We provide regular walks, meal times according to your schedule, and daily photo/video updates. Maximum of 2-3 boarding dogs at any time to ensure individual attention.",
  },
  {
    question: "Do you offer meet-and-greets before booking?",
    answer: "Absolutely! We always recommend a free, no-obligation meet-and-greet before any booking. This allows us to meet your dog, understand their personality and needs, and answer any questions you have. For boarding, we also recommend a trial day to ensure your dog is comfortable in our home.",
  },
  {
    question: "How do I book and pay for services?",
    answer: "Booking is easy – simply contact us via phone, email, or the contact form on this page. For regular walks, we typically arrange a weekly schedule. Payment is due weekly in advance for walks, or at time of booking for boarding. We accept bank transfer, PayPal, and cash.",
  },
  {
    question: "What if I need to cancel a booking?",
    answer: "We understand plans change. For dog walks, we require 24 hours notice for cancellations. For boarding, we require 7 days notice for a full refund, or 48 hours for a 50% refund. Emergency situations are handled on a case-by-case basis – we're always understanding of genuine emergencies.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Got questions about our dog walking and boarding services in Penkridge? 
            Find answers to common queries below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us directly
            </a>
            {" "}– we're always happy to help!
          </p>
        </div>
      </div>
    </section>
  )
}
