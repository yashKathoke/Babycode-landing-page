import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-12 text-neutral-5 py-12 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-coral-5 font-bold text-2xl">IELTS Pro Institute</h2>
          <p className="mt-3 text-neutral-7">
            Helping students achieve their global dreams since 2020.
          </p>
        </div>

        <div>
          <h3 className="text-neutral-1 font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-neutral-7">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-coral-5" />
              123 Learning Street, New Delhi, India
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-coral-5" />
              support@ieltspro.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-coral-5" />
              +91 99999 99999
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-neutral-1 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-coral-5 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-coral-5 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-coral-5 transition">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 pt-6 border-t border-neutral-9 text-center text-neutral-7 text-sm">
        © {new Date().getFullYear()} IELTS Pro Institute. All rights reserved.
      </div>
    </footer>
  );
}
