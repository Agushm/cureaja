import Container from "../containers/Container";

const Clients = () => {
  return (
    <>
      <Container className="relative flex flex-row overflow-x-hidden">
        <div className="flex flex-row animate-marquee">
          <img
            src="/img/brands/amazon.svg"
            alt="logo amazon"
            className="mx-6 w-96 "
          />
          <img
            src="/img/brands/microsoft.svg"
            alt="logo microsoft"
            className="mx-6 w-96  "
          />

          <img
            src="/img/brands/netflix.svg"
            alt="logo netflix"
            className="mx-6 w-96 "
          />
          <img
            src="/img/brands/google.svg"
            alt="logo google"
            className="mx-6 w-96 "
          />
          <img
            src="/img/brands/facebook.svg"
            alt="logo facebook"
            className="mx-6 w-96 "
          />
          <img
            src="/img/brands/tesla.svg"
            alt="logo tesla"
            className="mx-6 w-96 "
          />
        </div>

        <div className="flex flex-row absolute top-0 py-8 md:animate-marquee2">
          <img
            src="/img/brands/amazon.svg"
            alt="logo amazon"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/microsoft.svg"
            alt="logo microsoft"
            className="mx-6 w-96 hidden md:inline"
          />

          <img
            src="/img/brands/netflix.svg"
            alt="logo netflix"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/google.svg"
            alt="logo google"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/facebook.svg"
            alt="logo facebook"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/tesla.svg"
            alt="logo tesla"
            className="mx-6 w-96 hidden md:inline"
          />
        </div>
      </Container>
      <Container className="relative flex flex-row overflow-x-hidden">
        <div className="flex flex-row animate-marqueelrt">
          <img
            src="/img/brands/amazon.svg"
            alt="logo amazon"
            className="mx-6 w-96"
          />
          <img
            src="/img/brands/microsoft.svg"
            alt="logo microsoft"
            className="mx-6 w-96 "
          />

          <img
            src="/img/brands/netflix.svg"
            alt="logo netflix"
            className="mx-6 w-96"
          />
          <img
            src="/img/brands/google.svg"
            alt="logo google"
            className="mx-6 w-96"
          />
          <img
            src="/img/brands/facebook.svg"
            alt="logo facebook"
            className="mx-6 w-96"
          />
          <img
            src="/img/brands/tesla.svg"
            alt="logo tesla"
            className="mx-6 w-96"
          />
        </div>

        <div className="flex flex-row absolute top-0 py-8  md:animate-marqueelrt2">
          <img
            src="/img/brands/amazon.svg"
            alt="logo amazon"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/microsoft.svg"
            alt="logo microsoft"
            className="mx-6 w-96 hidden md:inline"
          />

          <img
            src="/img/brands/netflix.svg"
            alt="logo netflix"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/google.svg"
            alt="logo google"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/facebook.svg"
            alt="logo facebook"
            className="mx-6 w-96 hidden md:inline"
          />
          <img
            src="/img/brands/tesla.svg"
            alt="logo tesla"
            className="mx-6 w-96 hidden md:inline"
          />
        </div>
      </Container>
    </>
  );
};

export default Clients;
