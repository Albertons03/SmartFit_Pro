import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anna K.",
    rating: 5,
    text: "Lenyűgöző, mennyire pontos a pulzusmérés!",
    gradient: "from-pink-400 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    name: "Márton S.",
    rating: 4,
    text: "A GPS hihetetlenül pontos, futáshoz tökéletes.",
    gradient: "from-blue-400 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    name: "Eszter P.",
    rating: 5,
    text: "Nagyon szép és minimalista. Nem vennék mást.",
    gradient: "from-purple-400 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    name: "Gábor L.",
    rating: 5,
    text: "7 napos aksi tényleg igaz, meglepett.",
    gradient: "from-emerald-400 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    name: "Luca R.",
    rating: 4,
    text: "Alvásfigyelés top szinten!",
    gradient: "from-amber-400 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-32 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-success-200 to-primary-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Mit mondanak</span>
            <br />
            <span className="text-gray-900">vásárlóink</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Több mint 10,000+ elégedett felhasználó
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br ${review.bgGradient} rounded-3xl border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div
                className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${review.gradient} rounded-xl flex items-center justify-center shadow-lg rotate-12`}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
                >
                  {review.name.charAt(0)}
                </div>
                <p className="text-gray-900 font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-gradient mb-2">10,000+</div>
            <div className="text-gray-600">Elégedett vásárló</div>
          </div>
          <div className="h-16 w-px bg-gray-300"></div>
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-gradient mb-2">4.8/5</div>
            <div className="text-gray-600">Átlagos értékelés</div>
          </div>
          <div className="h-16 w-px bg-gray-300"></div>
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-600">Ajánlaná másnak</div>
          </div>
        </div>
      </div>
    </section>
  );
}
