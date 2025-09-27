import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const items = ["Home", "Features", "Testimonials", "Contact"]

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl 
                                        glass-nav flex items-center justify-between px-6 py-3 z-50 transition-all">
            
            
            <div className="text-coral-5 font-bold text-2xl tracking-tight cursor-pointer">
                IELTS Pro
            </div>

            
            <div className="hidden md:flex items-center gap-8 text-neutral-9 font-medium">
                <ul className="flex gap-8">
                    {items.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                className="relative group"
                            >
                                <span className="transition-colors group-hover:text-coral-5">
                                    {item}
                                </span>
                                {/* Underline effect */}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-coral-5 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                
                <a
                    href="#enroll"
                    className="ml-6 bg-coral-5 text-white px-5 py-2 rounded-lg font-medium 
                                         hover:bg-coral-6 transition shadow-md"
                >
                    Enroll Now
                </a>
            </div>

            
            <button
                onClick={toggleMenu}
                className="md:hidden text-coral-5 focus:outline-none focus:ring-2 focus:ring-coral-5 rounded-lg p-2"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    // Close Icon
                    <X className="w-7 h-7"/>
                ) : (
                    // Hamburger Icon
                    <Menu className="w-7 h-7"/>
                )}
            </button>

            
            {isOpen && (
                <div className="absolute top-full mt-3 left-0 w-full bg-neutral-1/90 backdrop-blur-md 
                                                rounded-xl shadow-lg md:hidden flex flex-col items-center py-6 gap-4">
                    {items.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="text-neutral-9 font-medium hover:text-coral-5 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#enroll"
                        className="bg-coral-5 text-white px-5 py-2 rounded-lg font-medium hover:bg-coral-6 transition shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Enroll Now
                    </a>
                </div>
            )}
        </nav>
    );
}
