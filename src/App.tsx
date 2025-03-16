import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ico from "./assets/ico.png";

function App() {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-10/12 md:mt-3 xl:mt-0 xl:max-w-7/12 md:top-30 xl:top-3/14 z-50">
        <Header />
        <p className="text-center pr-2 pl-2 font-bold mt-5 sm:mb-2 xl:hidden">
          Cada espaço que criamos carrega a história, a emoção e a autenticidade
          de quem o habita. Na Sorèli, sua visão é a nossa inspiração, e cada
          projeto é uma experiência única e transformadora
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#D47831] via-[#D47831] via-70% to-[#ffffff00] flex flex-col items-center justify-center z-10 md:bg-gradient-to-t md:from-transparent md:via-transparent">
        <MainContent />
        <img
          src={ico}
          alt="Soreli"
          className="hidden md:block absolute bottom-12 md:bottom-3 w-18 xl:14 md:w-28"
        />
      </div>
    </div>
  );
}

export default App;
