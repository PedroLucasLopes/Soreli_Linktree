import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ico from "./assets/ico.png";

function App() {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-10/12 md:mt-3 xl:mt-0 xl:max-w-7/12 md:top-30 xl:top-3/14 z-50">
        <Header />
      </div>
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#D47831] via-[#D47831] via-70% to-[#ffffff00] flex flex-col items-center justify-center z-10 md:bg-gradient-to-t md:from-transparent md:via-transparent">
        <MainContent />
        <img
          src={ico}
          alt="Soreli"
          className="absolute bottom-10 md:bottom-3 w-18 md:w-28"
        />
      </div>
    </div>
  );
}

export default App;
