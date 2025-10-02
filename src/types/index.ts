import type { ReactElement } from "react";

export interface CarouselItem {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}
