import FeatureCard from "./Card";

export default function Features() {
    const features = [
        {
            title: "Speaking Practice with Experts",
            desc: "Daily speaking sessions and feedback to boost fluency and confidence.",
            img: "https://images.pexels.com/photos/8849281/pexels-photo-8849281.jpeg"
        },
        {
            title: "Mock Tests That Feel Real",
            desc: "Simulate the real exam environment with timed mock tests and instant results.",
            img: "https://images.pexels.com/photos/8204996/pexels-photo-8204996.jpeg"
        },
        {
            title: "AI-Powered Band Score Prediction",
            desc: "Track your progress with smart tools that predict your band score accurately.",
            img: "https://images.pexels.com/photos/17485658/pexels-photo-17485658.png"
        },
        {
            title: "Flexible Online Classes",
            desc: "Learn anytime, anywhere with our live & recorded sessions.",
            img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1074"
        },
    ];

    return (
        <section id="features" className="py-20 bg-neutral-12">
            <div className="max-w-7xl mx-auto px-6">
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-1 mb-12">
                Why Choose <span className="text-coral-5">US?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {features.map((feature, idx) => (
                
                <FeatureCard 
                    key={idx}
                    title={feature.title}
                    desc={feature.desc}
                    img={feature.img}
                />
                ))}
            </div>
            </div>
        </section>
    );
}
