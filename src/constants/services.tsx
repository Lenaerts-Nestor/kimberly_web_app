import { FaGift, FaBuilding } from "react-icons/fa";
import { MdSchool, MdSportsBasketball, MdCelebration } from "react-icons/md";
import type { CarouselItem, ContactInfo } from "../types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+32466409276",
  email: "Sublimationdesign@hotmail.com",
};

export const SERVICE_ITEMS: CarouselItem[] = [
  {
    icon: <FaGift className="text-5xl md:text-6xl text-orange-500" />,
    title: "Cadeau en Detailhandel",
    description:
      "Levering van gepersonaliseerde cadeaus zoals mokken, t-shirts, en sleutelhangers. Aanbieding van geschenken voor speciale gelegenheden zoals verjaardagen, huwelijken, en jubilea.",
    color: "from-pink-100 to-orange-100",
  },
  {
    icon: <MdCelebration className="text-5xl md:text-6xl text-orange-500" />,
    title: "Evenementen en Feestorganisatie",
    description:
      "Productie van gepersonaliseerde decoraties en bedankgeschenken voor bruiloften, verjaardagen, en bedrijfsevenementen. Printen van uitnodigingen, flyers, en banners voor speciale gelegenheden.",
    color: "from-orange-100 to-pink-100",
  },
  {
    icon: <FaBuilding className="text-5xl md:text-6xl text-orange-500" />,
    title: "Bedrijven en Zakelijke Markt",
    description:
      "Bedrukking van bedrijfskleding en promotiematerialen zoals pennen, mokken, en tassen. Ontwerp en productie van logo-stickers, bedrijfsflyers, visitekaartjes, en posters. Bedrijfsgerelateerde geschenken en merchandise voor klantenbinding en teambuilding.",
    color: "from-pink-100 to-orange-100",
  },
  {
    icon: <MdSchool className="text-5xl md:text-6xl text-orange-500" />,
    title: "Onderwijsinstellingen",
    description:
      "Aanbieding van op maat gemaakte schoolspullen, truien, en waterflessen met schoollogo's. Flyers en posters voor open dagen, evenementen, en schoolfeesten.",
    color: "from-orange-100 to-pink-100",
  },
  {
    icon: (
      <MdSportsBasketball className="text-5xl md:text-6xl text-orange-500" />
    ),
    title: "Sport en Fitness",
    description:
      "Sportkleding en merchandise met clublogo's, zoals t-shirts, bidons, en petten. Flyers en banners voor sportevenementen en toernooien.",
    color: "from-pink-100 to-orange-100",
  },
];
