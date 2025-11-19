import { Check } from "lucide-react";

const features = [
  "Valós idejű egészségmonitorozó rendszer",
  "Intelligens aktivitásfelismerés",
  "AI-alapú edzés-optimalizálás",
  "Ultra-könnyű design",
  "Karcálló üveg",
  "Vízálló kialakítás",
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6 bg-gradient-to-br from-primary-50 via-accent-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-gradient">Miért jobb,</span>
              <br />
              <span className="text-gray-900">mint más okosórák?</span>
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden glow-on-hover">
              <img
                src="/images/u1735675282_Smartwatch_on_wrist_during_running_outdoor_fitnes_877e1113-c181-42a8-8edc-8bae8f24b773_2.png"
                alt="SmartFit Pro X - Outdoor Fitness"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient if image fails
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.classList.add(
                      "bg-gradient-to-br",
                      "from-gray-100",
                      "to-gray-200"
                    );
                  }
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-success-400 to-success-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-lg animate-bounce-slow">
              #1 Választás
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
