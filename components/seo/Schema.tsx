export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.penkridgedogservices.co.uk/#business",

        name: "Penkridge Dog Services",

        url: "https://www.penkridgedogservices.co.uk",

        logo: "https://www.penkridgedogservices.co.uk/logo.png",

        image: "https://www.penkridgedogservices.co.uk/logo.png",

        telephone: "+447427684740",

        email: "penkridgedogservices@gmail.com",

        description:
          "Professional dog walking, dog boarding and dog sitting services in Penkridge, Staffordshire. Fully insured, reliable and trusted local dog care provider.",


        priceRange: "££",


        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],

            opens: "07:00",

            closes: "20:00"
          }
        ],


        sameAs: [
          "https://www.instagram.com/penkridgedogservices/"
        ],


       knowsAbout: [
  "Dog Walking",
  "Dog Boarding",
  "Dog Sitting",
  "Pet Care"
],

serviceType: [
  "Dog Walking",
  "Dog Boarding",
  "Dog Sitting"
],
        address: {
          "@type": "PostalAddress",

          addressLocality: "Penkridge",

          addressRegion: "Staffordshire",

          postalCode: "ST19",

          addressCountry: "GB"
        },


        geo: {
          "@type": "GeoCoordinates",

          latitude: 52.725,

          longitude: -2.119
        },


        areaServed: [
          "Penkridge",
          "Stafford",
          "Cannock",
          "Brewood",
          "Acton Trussell",
          "Dunston",
          "Staffordshire"
        ],


               hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dog Services",

          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dog Walking",
                description:
                  "Daily dog walking in Penkridge and Staffordshire including solo and group walks."
              }
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dog Boarding",
                description:
                  "Home-from-home dog boarding with secure garden access and daily walks."
              }
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dog Sitting",
                description:
                  "Dog sitting and home visits including feeding, toilet breaks and companionship."
              }
            }
          ]
        }
      },

      {
        "@type": "WebSite",
        "@id": "https://www.penkridgedogservices.co.uk/#website",
        url: "https://www.penkridgedogservices.co.uk",
        name: "Penkridge Dog Services"
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.penkridgedogservices.co.uk/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What areas do you cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We provide dog walking, dog boarding and dog sitting services across Penkridge, Stafford, Cannock, Brewood and surrounding Staffordshire villages."
            }
          },

          {
            "@type": "Question",
            name: "Are you insured and DBS checked?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, Penkridge Dog Services provides trusted professional dog care with appropriate insurance and checks."
            }
          },

          {
            "@type": "Question",
            name: "Do you offer meet-and-greets?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we offer meet-and-greets before bookings so dogs and owners are comfortable."
            }
          }
        ]
      }
    ]
  }


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}