import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants/services";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-pink-200 py-8 sm:py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <img
          src="/Kimberly Logo.jpg"
          alt="Subprijn by Kimberly"
          className="w-32 sm:w-40 mx-auto mb-6 object-contain"
        />
        <p className="text-gray-600 text-base sm:text-lg mb-4">
          <strong>Subprijn by Kimberly</strong> - Waar creativiteit en kwaliteit
          samenkomen
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 text-sm sm:text-base">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-pink-500 hover:underline font-semibold flex items-center gap-2"
          >
            <FaPhone /> {CONTACT_INFO.phone}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-orange-500 hover:underline font-semibold flex items-center gap-2"
          >
            <FaEnvelope /> {CONTACT_INFO.email}
          </a>
        </div>
        <p className="text-gray-500 text-sm sm:text-base">
          © 2025 Subprijn by Kimberly
        </p>
      </div>
    </footer>
  );
}
