export function QRCodeSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl mb-20 md:mb-8">
      <div className="bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl shadow-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-6 animate-bounce-slow">
            📱
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            SCAN ME!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Scan de QR code voor directe toegang tot al onze contact informatie
            en diensten!
          </p>
          <div className="bg-white rounded-2xl p-6 inline-block shadow-2xl">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-center px-4">
                [QR Code Placeholder]
                <br />
                <span className="text-sm">Voeg hier uw QR code toe</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
