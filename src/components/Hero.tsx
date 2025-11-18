import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 px-6 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-success-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full mb-6 animate-bounce-slow">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Új generációs technológia</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-gradient">SmartFit Pro X</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4">
            A jövő okosórája
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Kövesd az egészséged, növeld a teljesítményed, és érj el többet.
          </p>
        </div>

        <div className="mb-16 relative animate-scale-in">
          <div className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden glow-on-hover">
            <img
              src="/.bolt/u1735675282_Close-up_smartwatch_display_glowing_health_data_s_611b19ed-5730-4306-9077-75895e68a122_0.png"
              alt="SmartFit Pro X - Premium Smartwatch"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600";
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 transform">
            Vásárlás most – 49€
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 shadow-md hover:shadow-lg hover:scale-105 transform">
            További információ
          </button>
        </div>
      </div>
    </section>
  );
}
