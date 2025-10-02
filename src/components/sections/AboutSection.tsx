export function AboutSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 pb-12 max-w-6xl">
      <div className="bg-white rounded-3xl shadow-2xl border-2 border-pink-200 p-8 sm:p-12 md:p-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30 -z-0"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-6 flex items-center justify-center gap-3">
            <span className="text-4xl">👋</span> Over Ons
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Wij zijn gespecialiseerd in{" "}
            <strong className="text-pink-500">
              gepersonaliseerde artikelen
            </strong>{" "}
            voor diverse gelegenheden, van unieke cadeaus tot producten voor
            bedrijven en organisaties. Daarnaast bieden we een printservice om
            flyers, logo's, stickers en ander promotiematerialen te creëren ter
            ondersteuning van jouw bedrijf of organisatie.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-pink-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
              Onze Missie 🎯
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
              Wij geloven in het realiseren van jouw boodschap en visie. Of het
              nu voor jouw bedrijf, organisatie of een speciale gelegenheid is,
              onze missie is om jouw ideeën om te zetten in unieke,
              gepersonaliseerde producten die echt het verschil maken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
