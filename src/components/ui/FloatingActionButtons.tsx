import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants/services";

export function FloatingActionButtons() {
  return (
    <div className="hidden md:flex fixed right-6 bottom-6 flex-col gap-4 z-50">
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
      >
        <FaPhone className="text-2xl" />
        <span className="absolute right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {CONTACT_INFO.phone}
        </span>
      </a>
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
      >
        <FaEnvelope className="text-2xl" />
        <span className="absolute right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Stuur een mail
        </span>
      </a>
    </div>
  );
}
