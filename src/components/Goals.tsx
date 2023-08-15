import SectionTitle from "./SectionTitle";
import Container from "./containers/Container";
import openWhatsApp from "@/utils/OpenWhatsapp";

const Goals = () => {
  return (
    <section id="Visi & Misi">
      <SectionTitle
        pretitle="Visi & Misi Cureaja"
        title="
        Kontribusi Kesehatan untuk Keluarga Indonesia Yang Lebih Baik!
        "
      >
      </SectionTitle>
        <div className="grid grid-cols-2 gap-2 item-center mt-10 mb-20">
          <div className="px-20">
            <div className="mx-auto flex justify-center items-center w-28 h-28 rounded-full bg-orange-500">
              <p className="text-white font-bold text-3xl text-center">Visi</p>
            </div>
            <p className="text-black dark:text-white font-bold text-2xl lg:text-3xl text-center my-6">Untuk Keluarga yang saling menjaga kesehatan</p>
            <p className="text-black dark:text-white text-xl text-left">Menciptakan pola pikir keluarga sehat untuk meminimalisir Non Communicable Disease (NCD) Berbasis Teknologi Gizi Skala Global</p>
          </div>
          <div className="px-20">
            <div className="mx-auto flex justify-center items-center w-28 h-28 rounded-full bg-orange-500">
              <p className="text-white font-bold text-3xl text-center">Misi</p>
            </div>
            <p className="text-black dark:text-white font-bold text-2xl lg:text-3xl text-center my-6">Dengan pendekatan 3 Aspek Penting</p>
            <ol className="text-black dark:text-white text-xl text-left">
                <li>1Layanan ahli gizi pribadi berbasis katering sehat dengan mengutamakan client sebagai prioritas utama</li>
                <li>One Person, One Nutritionist</li>
                <li>Memberikan akses kemudahan terhadap client</li>
            </ol>
          </div>
        </div>
    </section>
  );
};

export default Goals;
