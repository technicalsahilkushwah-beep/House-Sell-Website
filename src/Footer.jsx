import React from "react";
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Dream<span className="text-blue-600">Home</span>
              </h2>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Buy, sell and rent premium properties with trust,
              transparency and expert guidance.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500 cursor-pointer" />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Properties</li>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Buy Property</li>
              <li>Sell Property</li>
              <li>Rent Home</li>
              <li>Legal Assistance</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>

            <ul className="mt-4 space-y-4 text-sm text-gray-600">

              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                Bhopal, India
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-600" />
                support@dreamhome.com
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          <p className="text-sm text-gray-500">
            © 2026 DreamHome. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
