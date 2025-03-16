const buttons = [
  {
    placeholder: "Whatsapp",
    url: "https://wa.me/5531992345490",
  },
  {
    placeholder: "Nosso Site",
    url: "https://soreliarquitetura.com/",
  },
  {
    placeholder: "TikTok",
    url: "https://www.tiktok.com/@soreli.arq",
  },
  {
    placeholder: "Instagram",
    url: "https://www.instagram.com/soreli.arq",
  },
];

const MainContent = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center items-center xl:flex-row xl:mt-80">
      {buttons.map((button, i) => (
        <button
          className={`btn bg-[#ededed] w-full max-w-96 h-12 sm:h-14 md:h-16 xl:h-18 2xl:h-20 rounded-3xl text-[#706859] font-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#fff] transition-all cursor-pointer md:text-2xl ${
            i === 1 ? "xl:mr-32" : ""
          }`}
          key={i}
        >
          <a href={button.url} target="_blank" rel="noopener noreferrer">
            {button.placeholder}
          </a>
        </button>
      ))}
    </div>
  );
};

export default MainContent;
