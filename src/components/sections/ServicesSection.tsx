import { Carousel } from "../Carousel";
import { SERVICE_ITEMS } from "../../constants/services";

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mb-20 md:mb-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Wat kunnen we voor je maken?
      </h2>
      <p className="text-center text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg">
        Ontdek onze diensten - swipe of klik door de categorieën! ✨
      </p>

      <Carousel items={SERVICE_ITEMS} autoPlayInterval={6000} />

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm sm:text-base italic">
          💡 Tip: De diensten wisselen automatisch. Klik op de pijltjes of swipe
          om te navigeren!
        </p>
      </div>
    </section>
  );
}
