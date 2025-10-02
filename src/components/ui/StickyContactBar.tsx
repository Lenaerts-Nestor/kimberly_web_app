import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants/services";

export function StickyContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-pink-200 shadow-lg z-50 px-4 py-3">
      <div className="flex gap-2">
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
        >
          <FaPhone className="text-base" /> Bel Nu
        </a>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="flex-1 px-4 py-3 bg-white text-gray-700 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border-2 border-pink-300 text-sm"
        >
          <FaEnvelope className="text-base" /> Mail
        </a>
      </div>
    </div>
  );
}
