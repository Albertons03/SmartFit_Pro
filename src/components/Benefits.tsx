import { Heart, Moon, MapPin, Battery } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Pulzusmérés",
    description: "Pontos egészségmonitorozás egész nap.",
    gradient: "from-red-400 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
  },
  {
    icon: Moon,
    title: "Alvásfigyelés",
    description: "Részletes alvásadatok, automatikus elemzés.",
    gradient: "from-indigo-400 to-purple-600",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    icon: MapPin,
    title: "GPS követés",
    description: "Beépített, nagy pontosságú GPS mozgáshoz és sporthoz.",
    gradient: "from-emerald-400 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Battery,
    title: "7 napos üzemidő",
    description: "Hosszú akkumulátor, kevesebb töltés.",
    gradient: "from-amber-400 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Miért SmartFit Pro X?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Minden funkció, amire szükséged van az egészséges élethez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-8 bg-gradient-to-br ${benefit.bgGradient} rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
