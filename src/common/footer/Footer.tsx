import { Phone, Mail, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "../../assets/Maskgroup.svg";

export default function Footer() {
  return (
    <footer className="bg-[#000A25] text-gray-300 text-sm w-full">
      <div className="max-w-7xl w-full mx-auto py-10 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold h-[123px] w-[123px]">
          <img
            src={logo}
            alt="RegnovaAI"
            className="h-[100%] w-[100%] object-contain w-auto"
          />
        </div>

        {/* Quick links */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-4">Quick links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Audit types */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-4">Audit Types</h4>
          <ul className="space-y-2">
            <li>SOC 1</li>
            <li>SOC 2</li>
            <li>SOX</li>
            <li>PCI-DSS</li>
            <li>HIPAA</li>
            <li>GDPR</li>
            <li>FedRAMP</li>
            <li>ISO 27001</li>
          </ul>
        </div>

        {/* Contact and social */}
        <div className="text-left">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" /> <span>+49 176 76897872</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" /> <span>founder@regnovaai.com</span>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <MapPin className="w-4 h-4 mt-1" />
            <span>
              71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, United
              Kingdom
            </span>
          </div>
        </div>
        <div className="text-left flex flex-col">
          <h4 className="text-white font-semibold mb-3">Social media</h4>
          <div className="flex items-center gap-2 mb-2">
            <Twitter className="w-5 h-5" /> <span>Twitter</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Facebook className="w-5 h-5" /> <span>Facebook</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Instagram className="w-5 h-5" /> <span>Instagram</span>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © 2025 RegnovaAI. All rights reserved.
      </div>
    </footer>
  );
}
