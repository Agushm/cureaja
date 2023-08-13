const openWhatsApp = (msg:string|null) => {
  const phoneNumber = "620895380792900"; // Replace with the desired phone number
  const message =
    msg??"Halo Kak Saya ingin Daftar Layanan Katering Sehat Bareng Ahli Gizi Pribadi , Bagimana Caranya ya Kak ??"; // Replace with the desired message
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

export default openWhatsApp;
