import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants/services";

export function HeroSection() {
  return (
    <header className="container mx-auto px-4 sm:px-6 pt-8 pb-12 max-w-7xl">
      <div className="flex flex-col items-center text-center">
        {/* Logo with Glow Effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <img
            src="/Kimberly Logo.jpg"
            alt="Subprijn by Kimberly"
            className="relative w-56 sm:w-64 md:w-80 object-contain logo-blend"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3 flex-wrap px-2">
          Breng uw visie
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            tot leven
          </span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mb-8 px-4 leading-relaxed">
          Van gepersonaliseerde cadeaus tot bedrijfskleding en feestmaterialen -
          ik help je om elk moment extra speciaal en uniek te maken! 🌟
        </p>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-4 mb-8">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-10 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
          >
            <FaPhone className="text-xl" /> {CONTACT_INFO.phone}
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-10 py-5 bg-white text-gray-700 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 border-2 border-pink-300 text-lg"
          >
            <FaEnvelope className="text-xl" /> {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </header>
  );
}
