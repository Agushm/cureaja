"use client";
import Image from "next/image";
import Container from "../containers/Container";
import Ebelabon from "../../../public/img/ebelabon.png";
import openWhatsApp from "@/utils/OpenWhatsapp";

const productDiv = () => {
  let divs = [];
  for (let i = 0; i < 3; i++) {
    divs.push(
      <div
        key={i}
        className="relative flex flex-col bg-white shadow-xl rounded-3xl justify-end mx-auto"
        style={{ width: 290, height: 300 }}
      >
        <img
          src="/img/products/product1.png"
          alt="logo microsoft"
          className="absolute -top-20"
        />
        <div className="p-5">
          <div>
            <h1 className="text-gray-900 text-xl font-medium">
              Nashe Goreng Lowfat
            </h1>
            <p className="text-gray-900 text-md my-2 ">
              Nasi goreng sehat dengan lemak sedikit
            </p>
          </div>
          <div className="flex flew-row justify-between">
            <div>
              <p className="text-gray-900 text-xl line-through font-bold">
                20.000
              </p>
              <p className="text-orange-500 text-2xl font-bold ">Rp 15.000</p>
            </div>
            <button
              onClick={() => openWhatsApp("Hallo saya mau pesan product")}
              className="bg-orange-500 text-lg text-white hover:bg-orange-600 font-medium p-2 px-5 rounded-xl"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    );
  }
  return divs;
};
const Products = () => {
  return (
    <>
      <Container className="flex flex-col w-screen min-h-screen">
        <div className="flex w-full justify-between items-center">
          <div>
            <h3 className="text-md md:text-2xl font-medium text-gray-400 mb-2">
              Produk
            </h3>
            <h1 className="text-xl md:text-6xl font-medium mb-4">
              Menu Diet <span className="text-orange-500">Sehat</span>
            </h1>
          </div>
          <h3 className="text-md md:text-xl underline">Lihat Semua</h3>
        </div>
        <div className="py-20">
          <div className="grid grid-cols-3 gap-0">
            {productDiv()}
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default Products;
