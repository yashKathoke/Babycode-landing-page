import { motion } from "motion/react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote:"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      authorName: "Leslie Alexander",
      authorTitle: "Freelance React Developer",
      rating: 5 as const,
    },
    {
      quote:"This is the best service I have ever used. I can't believe how much easier my life has become!",
      authorName: "Michael Scott",
      authorTitle: "Regional Manager",
      rating: 4 as const,
    },
    {
      quote:"Absolutely wonderful! I would recommend this to anyone looking to improve their workflow.",
      authorName: "Pam Beesly",
      authorTitle: "Graphic Designer",
      rating: 5 as const,
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // only move half since array is doubled
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // slower = smoother
            ease: "linear",
          }}
        >
          {loopTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80"
              style={{ flexBasis: "320px" }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
