"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

const Services = (props: any) => {
  const services = [
    {
      title: "Launch",
      content:
        "Sekedar Ingin Makan Sehat  memberikan Semangat Harian di Tengah Sibuk Jam Kerja!",
      desc: "Makan sehat lebih teratur dan kerja makin produktif",
      price: "IDR 37K",
      benefits: [
        "Geratis Makanan Sehat",
        "Geratis E-Counseling Gizi 3 Hari Sepuasnya",
        "Voucer Cashback",
        "Bonus Kupon",
      ],
    },
    {
      title: "Diet 3 Hari",
      content:
        "Direkomendasikan dalam proses Pemulihan karna Sakit tipe Ringan Demam, Batuk, Flu, Pilek, dsb ",
      desc: "Makan sehat lebih teratur dan kerja makin produktif",
      price: "IDR 375K",
      benefits: [
        "Geratis Makanan Sehat 6x",
        "Geratis E-Counseling Gizi 1 Minggu Semaunya Sepuasnya",
        "Voucer Cashback",
        "Bonus Kupon",
        "& Sebagainya",
      ],
    },
    {
      title: "Diet 7 Hari",
      content:
        "Fokus dalam Program Diet Naik atau Turun Berat Badan Estimasi 1kg (BB up/down)",
      desc: "Makan sehat lebih teratur dan kerja makin produktif",
      price: "IDR 725K",
      benefits: [
        "Makanan Sehat 14x",
        "Geratis Snack Sehat Setiap Harinya",
        "E-Counseling Diet 2 Minggu Semaunya Sepuasnya",
        "Geratis Medical Check Up",
        "Gratis Konsultasi Gizi Berbasis Kesehatan Mental",
        "Voucer Cashback",
        "Bonus Kupon",
        "& Sebagainya",
      ],
    },
  ];

  const handleSelectService = () => {};
  return (
    <>
      <section id="services" className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <SectionTitle pretitle="Layanan Cureaja" title="Coba Layanan Kami">
            Kami Percaya bahwa Pengalaman dan Kesabaran dalam Pilihan Program
            Diet anda merupakan Investasi untuk Hidup Sehat Secara Fisik dan
            Mental.
          </SectionTitle>
          <div className="mx-4 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {services.map((service: any, index: number) => (
              <div
              key={index}
                onClick={handleSelectService}
                className="flex flex-col justify-between p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white hover:shadow-xl"
              >
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    {service.content}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      {service.price}
                    </span>
                  </div>
                  {/* <!-- List --> */}
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {service.benefits.map((benefit: any, index: number) => (
                      <li className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="text-base text-white bg-orange-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                  Gabung Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
