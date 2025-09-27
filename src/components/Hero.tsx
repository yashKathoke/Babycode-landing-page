import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="bg-neutral-3" id="home">
      <div className="max-w-7xl mx-auto px-6 py-20 pt-50 md:pt-20 md:my-0 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 h-screen">
        <div className="flex-1 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-13 leading-tight">
            Achieve Your <span className="text-coral-5">Dream IELTS Score</span>
          </h1>

          <p className="text-lg text-neutral-7 mt-6 max-w-lg">
            Personalized training, modern tools, and expert guidance to help you
            reach Band 8+ and unlock global opportunities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-coral-5 text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-6 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-30 left-20 hidden sm:block"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <img
          src="/hero1.png"
          alt="Hero Image 1"
          className="w-85 h-auto"
          style={{ transform: "rotate(-20deg)" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-20 hidden sm:block"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <img
          src="/hero2.png"
          alt="Hero Image 2"
          className="w-88 h-auto"
          style={{ transform: "rotate(20deg)" }}
        />
      </motion.div>
    </section>
  );
}
