import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import SectionTitle from "../components/SectionTitle";
import Testimonials from "@/components/testimonials";
import Features from "@/components/Features";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import PopupWidget from "@/components/PopupWidget";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
export default function Home() {
  const images = [
    '/img/banner1.jpg',
    '/img/banner2.jpg',
    'https://via.placeholder.com/800x400?text=Slide%203',
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Keunggulan Cureaja"
        title=" Mengapa Memilih Kami?"
      >
        Kami Percaya bahwa Pengalaman dan Kesabaran dalam Pilihan Program Diet
        anda merupakan Investasi untuk Hidup Sehat Secara Fisik dan Mental.
      </SectionTitle>
      <Features />
      <div className="flex justify-center items-center h-screen">
        <Carousel images={images} />
      </div>
      <Services />
      <SectionTitle
        pretitle="Ahli Gizi Cureaja"
        title="Praktisi Kesehatan Profesional"
      >
        Langkah awal untuk hidup sehat yaitu dengan menjaga pola makan dan
        kebiasaan makan yang baik dan benar
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}
