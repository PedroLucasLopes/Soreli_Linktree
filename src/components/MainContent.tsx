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
    <div className="flex xl:absolute xl:bottom-8 w-full flex-col gap-3 justify-center items-center xl:flex-row mt-10">
      {buttons.map((button, i) => (
        <button
          className={`btn bg-[#ededed] w-3/4 max-w-96 h-12 sm:h-14 md:h-16 xl:h-16 2xl:h-20 rounded-3xl text-[#706859] font-bold shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#fff] transition-all cursor-pointer md:text-2xl ${
            i === 1 ? "xl:mr-25" : ""
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
