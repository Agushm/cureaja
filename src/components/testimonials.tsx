import Image from "next/image";
import React from "react";
import Container from "./containers/Container";

import userOneImg from "../../public/img/talent/1.png";
import userTwoImg from "../../public/img/talent/2.png";
import userThreeImg from "../../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-start w-full h-full bg-orange-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userOneImg}
              name="Dr.dr Anik Lestari M.Kes, SpKKLP"
              title="Penasehat Cureaja.id & Dokter Spesialis Kedokteran Keluarga Layanan Primer"
            />
            <p className="text-2xl leading-normal ">
            Afiliasi Fakultas Kedokteran UNS, Prodi S2 Ilmu Gizi Sekolah Pascasarjana UNS, Prodi S3 Ilmu Kesehatan Masyarakat UNS, dan Pusat Penelitian & Pengembangan Pangan Gizi dan Kesehatan Masyarakat, LPPM, UNS
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-start w-full h-full bg-orange-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name="Fitsyal Febriyadin S.Gz., M.Gz (Cand.) CH., CHt."
              title="Ahli Gizi & CEO Cureaja.id"
            />
            <p className="text-2xl leading-normal ">
            Diet seimbang dengan cara baik dan benar menjadi salah satu cara untuk memulai hidup srhat & bahagia
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props: any) {
  return (
    <div className="flex flex-col items-center mb-8 space-x-3 text-center">
      <Image
          src={props.image}
          width="100"
          height="100"
          alt="Avatar"
          placeholder="blur"
          className="rounded-full"
        />
        <div className="text-xl font-bold my-2">{props.name}</div>
        <div className="text-lg text-gray-600 dark:text-gray-400">{props.title}</div>
    </div>
  );
}

function Mark(props: any) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
