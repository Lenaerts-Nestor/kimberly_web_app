import "./App.css";
import { FaPhone, FaEnvelope, FaGift, FaBuilding } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { MdSchool, MdSportsBasketball, MdCelebration } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen bg-[#FFF5F7] relative">
      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
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
      <header className="container mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col items-center text-center">
          <img
            src="/Kimberly Logo.jpg"
            alt="Subprijn by Kimberly"
            className="w-64 md:w-80 mb-4 object-contain logo-blend"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            Maak het bijzonder! <span className="text-pink-500">💕</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mb-10">
            Van gepersonaliseerde cadeaus tot feestmateriaal - ik help je om elk
            moment extra speciaal te maken!
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="tel:+32466409276"
              className="px-8 py-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaPhone /> Bel me!
            </a>
            <a
              href="mailto:Sublimationdesign@hotmail.com"
              className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 border-2 border-gray-200"
            >
              <FaEnvelope /> Stuur een berichtje
            </a>
          </div>
        </div>
      </header>

      {/* Heart Divider - About Section */}
      <div className="flex justify-center mb-16 px-6">
        <div className="w-full max-w-5xl bg-white border-2 border-pink-200 rounded-3xl pt-16 pb-10 px-10 md:px-16 relative shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-6 flex items-center justify-center gap-2">
            Hoi, ik ben Kimberly! 👋
          </h2>
          <p className="text-gray-600 text-lg text-center leading-relaxed">
            Ik maak graag unieke, gepersonaliseerde spulletjes voor alle
            bijzondere momenten in je leven. Of je nu een cadeautje zoekt, iets
            leuks voor een feestje, of merchandise voor je bedrijf - ik help je
            graag om het perfect te maken! 🌟
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Wat kan ik voor je maken?
        </h2>
        <p className="text-center text-gray-500 mb-12 flex items-center justify-center gap-2">
          Een klein kijkje in wat ik allemaal doe! ✨
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Service 1 - Cadeautjes */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <FaGift className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cadeautjes & Geschenken
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Van mokken tot t-shirts, sleutelhangers tot gepersonaliseerde
              geschenken voor verjaardagen, huwelijken en jubilea. Maak elk
              moment speciaal! 🎁
            </p>
          </div>

          {/* Service 2 - Feestjes */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <MdCelebration className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Feestjes & Events
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Uitnodigingen, decoraties en bedankjes voor je bruiloft,
              verjaardag of bedrijfsfeest. Alles om je feestje onvergetelijk te
              maken! 🎉
            </p>
          </div>

          {/* Service 3 - Bedrijven */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <FaBuilding className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Voor Bedrijven
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bedrijfskleding, promotiematerialen zoals pennen en mokken,
              visitekaartjes en flyers. Perfect voor teambuilding en
              klantcadeaus! 💼
            </p>
          </div>

          {/* Service 4 - Scholen */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <MdSchool className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Voor Scholen
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Schoolspullen met logo, truien, waterflessen en posters voor open
              dagen en schoolfeesten. Laat je school stralen! 📚
            </p>
          </div>

          {/* Service 5 - Sport */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <MdSportsBasketball className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sport & Clubs
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sportkleding met clublogo's, t-shirts, bidons, petten en banners
              voor sportevenementen. Toon je teamspirit! ⚽
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3">
          Laten we praten! 💬
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Heb je een leuk idee? Bel of mail me gerust!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-pink-100 hover:shadow-xl transition-all duration-300">
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
              className="text-pink-500 text-xl font-semibold text-center block mb-2 hover:underline"
            >
              +32 466 40 92 76
            </a>
            <p className="text-gray-500 text-center">Ik neem graag op! ☎️</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-orange-100 hover:shadow-xl transition-all duration-300">
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
              className="text-orange-500 text-xl font-semibold text-center block mb-2 hover:underline"
            >
              Sublimationdesign@hotmail.com
            </a>
            <p className="text-gray-500 text-center">Ik antwoord snel! 💌</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border-2 border-pink-100 max-w-4xl mx-auto text-center">
          <IoSparkles className="text-6xl text-pink-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            Samen maken we het mooi! ✨
          </h3>
          <p className="text-gray-600 text-lg">
            Geen idee is te gek! Vertel me wat je in gedachten hebt en ik help
            je om er iets moois van te maken. 🎨
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© 2025 Subprijn by Kimberly - Met liefde gemaakt 💕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
