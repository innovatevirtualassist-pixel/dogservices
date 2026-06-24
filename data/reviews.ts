export type Testimonial = {
  name: string
  dog: string
  service: "Boarding" | "Dog Walking" | "Doggy Day Care" | "Dog Sitting"
  date: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Nicola G.",
    dog: "Pablo",
    service: "Boarding",
    date: "Apr 06, 2026",
    location: "Rover Review",
    rating: 5,
    text:
      "Maria was lovely with Pablo during his stay and kept me updated with lovely pictures and videos so I could see all the fun he was having. It makes such a difference knowing your dog is being cared for as though he is part of the family."
  },
  {
    name: "Tania W.",
    dog: "Pepper",
    service: "Boarding",
    date: "Jan 26, 2026",
    location: "Rover Review",
    rating: 5,
    text:
      "What a wonderful family, truly creating a home away from home. Pepper had a great time and Maria kept me updated with plenty of pictures and videos. Thank you for caring for my fur baby so well."
  },
  {
    name: "Dean K.",
    dog: "Chester",
    service: "Boarding",
    date: "Jan 02, 2026",
    location: "Rover Review",
    rating: 5,
    text:
      "I could not be happier with how Maria and her family looked after our 8 month old dachshund Chester for 2 weeks. Regular updates helped keep our mind at ease and he clearly had a wonderful stay."
  },
  {
    name: "Gemma R.",
    dog: "Poppy",
    service: "Doggy Day Care",
    date: "Dec 07, 2025",
    location: "Rover Review",
    rating: 5,
    text:
      "Wonderful family. Took Poppy on a trip out to the forest and gave her lots of attention and exercise. She was treated like one of their own and came home very happy."
  },
  {
    name: "Scott W.",
    dog: "Frankie",
    service: "Boarding",
    date: "Oct 21, 2025",
    location: "Rover Review",
    rating: 5,
    text:
      "ABSOLUTELY FANTASTIC STAY. Maria and her family looked after our dog superbly with daily updates and photos. We had total peace of mind knowing she was safe and happy."
  },
  {
    name: "April S.",
    dog: "Zac",
    service: "Dog Sitting",
    date: "Aug 22, 2025",
    location: "Rover Review",
    rating: 5,
    text:
      "Cannot recommend highly enough. Professional, caring, and trustworthy. My dog was treated like part of the family and came home calm and happy."
  }
]