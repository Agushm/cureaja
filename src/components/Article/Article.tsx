import Container from "../containers/Container";

const data = [
  {
    title: "Martabak Sayur Abon",
    src: "/img/menu/menu1.png",
  },
  {
    title: "Oseng Tempe Rendah Lemak",
    src: "/img/menu/menu2.png",
  },
  {
    title: "Nashe Goreng Abon",
    src: "/img/menu/menu3.png",
  },
  {
    title: "Salad Abon",
    src: "/img/menu/menu4.jpg",
  },
];
const Article = () => {
  return (
    <>
      <Container className="flex flex-col w-screen min-h-screen">
        <div className="flex w-full justify-between items-center">
          <div>
            <h3 className="text-md md:text-2xl font-medium text-gray-400 mb-2">
              Tips Sehat
            </h3>
            <h1 className="text-xl md:text-5xl font-medium mb-4">
              Resep <span className="text-orange-500">Makanan</span>
            </h1>
          </div>
          <h3 className="text-md md:text-xl underline">Lihat Semua</h3>
        </div>
        <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item, index) => {
            return (
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
                  <img
                    src={item.src}
                    alt={`gambar ${item.title.toLocaleLowerCase}`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-2 flex-col justify-between">
                  <h1 className="text-lg font-medium">
                    {item.title}
                  </h1>
                  <p className="text-md line-clamp-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                  <p className="text-sm underline">Baca Selengkapnya</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Article;
