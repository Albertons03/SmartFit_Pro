import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const links = ["Kapcsolat", "Adatvédelmi Tájékoztató", "ÁSZF", "Impresszum"];

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                SmartFit Pro X
              </span>
            </h3>
            <p className="text-gray-400 mb-4">A jövő okosórája</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Innovatív technológia, amely segít elérni céljaidat és
              egészségesebb életet élni.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Gyors linkek
            </h4>
            <div className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Elérhetőség
            </h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@smartfitpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+36 1 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Budapest, Magyarország</span>
              </div>
            </div>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Kövess minket
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center hover:from-primary-500 hover:to-primary-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center hover:from-accent-500 hover:to-accent-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Csatlakozz több mint 10,000 követőnkhöz!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 SmartFit Pro X. Minden jog fenntartva.
            </p>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              in Hungary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
