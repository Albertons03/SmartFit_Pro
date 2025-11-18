import { Play } from "lucide-react";

export default function Video() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Nézd meg működés közben!</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in">
          Fedezd fel, hogyan válik a SmartFit Pro X a tökéletes edzőpartnerré
        </p>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer glow-on-hover animate-scale-in">
          {/* GIF Background */}
          <img
            src="/.bolt/u1735675282_Close-up_smartwatch_display_glowing_health_data_s_48729afd-026e-4ef0-85b7-e0b5a09c623c_3.gif"
            alt="SmartFit Pro X Demo"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Overlay with play button */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-accent-900/40 to-gray-900/40 flex items-center justify-center group-hover:bg-primary-900/30 transition-all duration-500">
            <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
              <Play
                className="w-10 h-10 text-primary-600 ml-2"
                fill="currentColor"
              />
            </div>
          </div>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <p className="text-white text-lg font-semibold animate-pulse">
              🎬 Tudd meg, mit tud még!
            </p>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-white/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-white/50 rounded-br-2xl"></div>
        </div>
      </div>
    </section>
  );
}
