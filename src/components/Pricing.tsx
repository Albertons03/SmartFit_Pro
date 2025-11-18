import { Check, ArrowRight, Zap } from "lucide-react";

const included = [
  "Ingyenes szállítás",
  "30 napos garancia",
  "Ajándék töltőkábel",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-8 animate-bounce-slow">
          <Zap className="w-5 h-5 fill-yellow-300 text-yellow-300" />
          <span className="font-semibold">Limitált készlet!</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Rendeld meg most
        </h2>
        <p className="text-xl text-white/90 mb-16">
          Különleges bevezetési ár - csak most!
        </p>

        <div className="p-12 bg-white rounded-3xl shadow-2xl animate-scale-in glow-on-hover">
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-7xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                49
              </span>
              <span className="text-4xl font-semibold text-gray-600">€</span>
            </div>
            <p className="text-gray-600 text-lg">
              Egyszer fizetsz, örökre tiéd
            </p>
            <div className="mt-4 inline-block bg-success-100 text-success-700 px-4 py-2 rounded-full text-sm font-semibold">
              💰 Spórolj 30€-t az eredeti árhoz képest
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {included.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>

          <button className="group w-full px-8 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xl font-bold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 animate-pulse-slow">
            <span>Vásárlás most – 49€</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-6 text-sm text-gray-500">
            🔒 Biztonságos fizetés • 🚚 2-3 napos szállítás
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>30 napos visszaküldés</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>2 év garancia</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Ingyenes support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
