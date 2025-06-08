import Header from "./header";
import MainContent from "./mainContent";

export default function Layout() {
  return (
    <div className="bg-creamOrange min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-xl h-[90vh] shadow-xl rounded-lg overflow-hidden">
        
        {/* Imagen del costado izquierdo (como antes) */}
        <div
          className="w-full md:w-1/4 bg-cover bg-center"
          style={{ backgroundImage: "url('/Darien_bike.jpg')" }}
        ></div>

        {/* Contenido principal */}
        <div className="w-full md:w-3/4 flex flex-col overflow-y-auto">
          <Header />
          <div className="flex items-center pb-10 justify-center">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

