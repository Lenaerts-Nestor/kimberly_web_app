import "./App.css";
import { FaPhone, FaEnvelope, FaGift, FaBuilding } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { MdSchool, MdSportsBasketball, MdCelebration } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] relative overflow-x-hidden">
      {/* Floating Action Buttons - Hidden on mobile, visible on tablet and up */}
      <div className="hidden md:flex fixed right-6 bottom-6 flex-col gap-4 z-50">
        <a
          href="tel:+32466409276"
          className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
        >
          <FaPhone className="text-2xl" />
        </a>
        <a
          href="mailto:Sublimationdesign@hotmail.com"
          className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 sm:px-6 pt-8 pb-12 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <img
            src="/Kimberly Logo.jpg"
            alt="Subprijn by Kimberly"
            className="w-56 sm:w-64 md:w-80 mb-4 object-contain logo-blend"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2 flex-wrap px-2">
            Maak het bijzonder! <span className="text-pink-500">💕</span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mb-8 px-4">
            Van gepersonaliseerde cadeaus tot feestmateriaal - ik help je om elk
            moment extra speciaal te maken!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
            <a
              href="tel:+32466409276"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaPhone /> Bel me!
            </a>
            <a
              href="mailto:Sublimationdesign@hotmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-gray-200"
            >
              <FaEnvelope /> Stuur een berichtje
            </a>
          </div>
        </div>
      </header>

      {/* Heart Divider - About Section */}
      <div className="flex justify-center mb-12 sm:mb-16 px-4 sm:px-6">
        <div className="w-full max-w-5xl bg-white border-2 border-pink-200 rounded-3xl pt-12 sm:pt-16 pb-8 sm:pb-10 px-6 sm:px-10 md:px-16 relative shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 text-center mb-4 sm:mb-6 flex items-center justify-center gap-2 flex-wrap">
            Hoi, ik ben Kimberly! 👋
          </h2>
          <p className="text-gray-600 text-base sm:text-lg text-center leading-relaxed">
            Ik maak graag unieke, gepersonaliseerde spulletjes voor alle
            bijzondere momenten in je leven. Of je nu een cadeautje zoekt, iets
            leuks voor een feestje, of merchandise voor je bedrijf - ik help je
            graag om het perfect te maken! 🌟
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-3 px-2">
          Wat kan ik voor je maken?
        </h2>
        <p className="text-center text-gray-500 mb-10 sm:mb-12 flex items-center justify-center gap-2 flex-wrap px-4">
          Een klein kijkje in wat ik allemaal doe! ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {/* Service 1 - Cadeautjes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <FaGift className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
              Cadeautjes & Geschenken
            </h3>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Van mokken tot t-shirts, sleutelhangers tot gepersonaliseerde
              geschenken voor verjaardagen, huwelijken en jubilea. Maak elk
              moment speciaal! 🎁
            </p>
          </div>

          {/* Service 2 - Feestjes */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <MdCelebration className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
              Feestjes & Events
            </h3>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Uitnodigingen, decoraties en bedankjes voor je bruiloft,
              verjaardag of bedrijfsfeest. Alles om je feestje onvergetelijk te
              maken! 🎉
            </p>
          </div>

          {/* Service 3 - Bedrijven */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <FaBuilding className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
              Voor Bedrijven
            </h3>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Bedrijfskleding, promotiematerialen zoals pennen en mokken,
              visitekaartjes en flyers. Perfect voor teambuilding en
              klantcadeaus! 💼
            </p>
          </div>

          {/* Service 4 - Scholen */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <MdSchool className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
              Voor Scholen
            </h3>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Schoolspullen met logo, truien, waterflessen en posters voor open
              dagen en schoolfeesten. Laat je school stralen! 📚
            </p>
          </div>

          {/* Service 5 - Sport */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
              <MdSportsBasketball className="text-3xl sm:text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
              Sport & Clubs
            </h3>
            <p className="text-gray-600 leading-relaxed text-center sm:text-left">
              Sportkleding met clublogo's, t-shirts, bidons, petten en banners
              voor sportevenementen. Toon je teamspirit! ⚽
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-2">
          Laten we praten! 💬
        </h2>
        <p className="text-center text-gray-500 mb-10 sm:mb-12 px-4">
          Heb je een leuk idee? Bel of mail me gerust!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-pink-100 hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                <FaPhone className="text-3xl text-pink-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Bel me!
            </h3>
            <a
              href="tel:+32466409276"
              className="text-pink-500 text-lg sm:text-xl font-semibold text-center block mb-2 hover:underline break-all"
            >
              +32 466 40 92 76
            </a>
            <p className="text-gray-500 text-center">Ik neem graag op! ☎️</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-2 border-orange-100 hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-sm sm:max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-3xl text-orange-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Stuur een mail!
            </h3>
            <a
              href="mailto:Sublimationdesign@hotmail.com"
              className="text-orange-500 text-base sm:text-xl font-semibold text-center block mb-2 hover:underline break-all"
            >
              Sublimationdesign@hotmail.com
            </a>
            <p className="text-gray-500 text-center">Ik antwoord snel! 💌</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border-2 border-pink-100 max-w-4xl mx-auto text-center w-full">
          <IoSparkles className="text-5xl sm:text-6xl text-pink-500 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center justify-center gap-2 flex-wrap px-2">
            Samen maken we het mooi! ✨
          </h3>
          <p className="text-gray-600 text-base sm:text-lg px-2">
            Geen idee is te gek! Vertel me wat je in gedachten hebt en ik help
            je om er iets moois van te maken. 🎨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm sm:text-base">
          <p>© 2025 Subprijn by Kimberly - Met liefde gemaakt 💕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
