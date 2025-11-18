import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Vízálló?',
    answer: 'Igen, IP67 szabvány szerint.',
  },
  {
    question: 'Meddig bírja az akkumulátor?',
    answer: 'Akár 7 nap egy feltöltéssel.',
  },
  {
    question: 'Kompatibilis iPhone-al?',
    answer: 'Igen, iOS 12+.',
  },
  {
    question: 'Androiddal kompatibilis?',
    answer: 'Igen, Android 8.0 és újabb.',
  },
  {
    question: 'Mennyi idő a szállítás?',
    answer: '3–5 munkanap.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
          Gyakori kérdések
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-8 pb-6 text-gray-700 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
