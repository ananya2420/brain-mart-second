import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OffersGrid from "./components/OffersGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <OffersGrid />
      <Footer />
    </div>
  );
}
