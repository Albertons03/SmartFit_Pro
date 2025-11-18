import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SF</span>
            </div>
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              SmartFit Pro X
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("benefits")}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Előnyök
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Funkciók
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Vélemények
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Vásárlás
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 bg-white rounded-2xl shadow-2xl animate-slide-down">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
              >
                Előnyök
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
              >
                Funkciók
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
              >
                Vélemények
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Vásárlás - 49€
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
