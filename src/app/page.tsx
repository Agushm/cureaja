import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Hero2 from "../components/hero/Hero2";
import SectionTitle from "../components/SectionTitle";
import Testimonials from "@/components/Talent";
import Features from "@/components/Features";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import PopupWidget from "@/components/PopupWidget";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Container from "@/components/containers/Container";
import Image from "next/image";
import Cta from "@/components/Cta";
import Goals from "@/components/Goals";
import BestSeller from "@/components/BestSeller/BestSeller";
import Clients from "@/components/Clients/Clients";
import Statistik from "@/components/Statistik/Statistik";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <BestSeller/>
      
      <Clients/>
      <Statistik/>
      {/* <Features />
      <Carousel />
      <Services />
      <Testimonials />
      <Goals/> */}
      {/* <Faq /> */}
      {/* <Cta />
      <Footer /> */}
      {/* <PopupWidget /> */}
    </>
  );
}
