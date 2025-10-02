import "./App.css";
import { StickyContactBar, FloatingActionButtons } from "./components/ui";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  QRCodeSection,
  ContactSection,
  Footer,
} from "./components/sections";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] to-[#FFE8EC] relative overflow-x-hidden">
      <StickyContactBar />
      <FloatingActionButtons />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <QRCodeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
