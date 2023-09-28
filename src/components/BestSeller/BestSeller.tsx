"use client";
import Image from "next/image";
import Container from "../containers/Container";
import Ebelabon from "../../../public/img/ebelabon.png";
import openWhatsApp from "@/utils/OpenWhatsapp";

const BestSeller = () => {
  return (
    <>
      <Container className="flex flex-col md:flex-row w-screen min-h-screen">
        <div className="w-full md:w-1/2 my-auto">
          <Image
            src={Ebelabon}
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="w-full md:w-1/2 my-auto">
          <h3 className="text-md md:text-2xl font-medium text-gray-400 mb-2">Produk Unggulan</h3>
          <h1 className="text-xl md:text-6xl font-medium mb-4">
            Ebel <span className="text-orange-500">Abon</span>
          </h1>
          <p className="text-md md:text-2xl">
            Pelopor Abon Telur Ayam pertama di Indonesia. Dengan bahan-bahan
            yang alami tanpa menggunakan bahan pengawet dan MSG
          </p>
          <p className="text-md md:text-2xl my-2 md:my-4">
            1 x Ebel Abon
            <br />
            15 min Konsultasi Kesahatan
          </p>
          <div className="flex flex-row mb-5">
            <p className="text-lg md:text-5xl font-medium line-through">60.000</p>
            <p className="text-lg md:text-5xl font-medium text-orange-500 ml-4">
              Rp 45.000
            </p>
          </div>
          <button onClick={()=>openWhatsApp('Hallo saya mau pesan Ebel Abon')} className="bg-orange-500 text-xl text-white hover:bg-orange-600 font-medium py-4 px-10 rounded-xl">
            Pesan Sekarang
          </button>
        </div>
      </Container>
    </>
  );
};

export default BestSeller;
