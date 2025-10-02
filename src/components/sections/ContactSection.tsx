import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { CONTACT_INFO } from "../../constants/services";

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mb-20 md:mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          📞 Neem Contact Op!
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Heb je vragen of wil je een bestelling plaatsen? We horen graag van
          je!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {/* Phone Card */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="group bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaPhone className="text-3xl sm:text-4xl text-pink-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Bel me direct!
            </h3>
            <p className="text-pink-500 text-xl sm:text-2xl font-bold mb-2 group-hover:underline">
              {CONTACT_INFO.phone}
            </p>
            <p className="text-gray-500">Ik neem graag op! ☎️</p>
          </div>
        </a>

        {/* Email Card */}
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="group bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Stuur een mail!
            </h3>
            <p className="text-orange-500 text-lg sm:text-xl font-bold mb-2 group-hover:underline break-all">
              {CONTACT_INFO.email}
            </p>
            <p className="text-gray-500">Ik antwoord binnen 24 uur! 💌</p>
          </div>
        </a>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-lg border-2 border-pink-200 max-w-4xl mx-auto text-center">
        <IoSparkles className="text-5xl sm:text-6xl text-pink-500 mx-auto mb-6 animate-pulse" />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Samen maken we het mooi! ✨
        </h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Geen idee is te gek! Vertel me wat je in gedachten hebt en ik help je
          om er iets moois en unieks van te maken. Van ontwerp tot eindproduct -
          we begeleiden je door het hele proces! 🎨
        </p>
      </div>
    </section>
  );
}
