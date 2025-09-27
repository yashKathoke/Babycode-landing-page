import { motion } from "motion/react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
const testimonials = [
    {
        quote:
            "Since joining, my confidence in speaking has soared. The instructors are incredibly supportive!",
        authorName: "Aisha Khan",
        authorTitle: "IELTS Candidate",
        rating: 5 as const,
    },
    {
        quote:
            "The practice tests were invaluable. I knew exactly what to expect on exam day.",
        authorName: "Kenji Tanaka",
        authorTitle: "Aspiring Immigrant",
        rating: 4 as const,
    },
    {
        quote:
            "The personalized feedback I received was a game-changer. I improved my writing score significantly.",
        authorName: "Elena Rodriguez",
        authorTitle: "University Applicant",
        rating: 5 as const,
    },
];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">
        Testimonials
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
