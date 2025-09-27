// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl 
                    glass-nav flex items-center justify-between px-6 py-3 z-50">
      
      
      <div className="text-coral-5 font-bold text-xl">IELTS Pro</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-neutral-9 font-medium">
        <li><a href="#" className="hover:text-coral-5 transition">Home</a></li>
        <li><a href="#courses" className="hover:text-coral-5 transition">Courses</a></li>
        <li><a href="#tests" className="hover:text-coral-5 transition">Mock Tests</a></li>
        <li><a href="#testimonials" className="hover:text-coral-5 transition">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-coral-5 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu */}
      <button className="md:hidden text-coral-5 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
             strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
      </button>
    </nav>
  );
}
