import Header from "./header";
import MainContent from "./mainContent";

export default function Layout() {
  return (
    <div className="bg-creamOrange min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-xl h-[90vh] shadow-xl rounded-lg overflow-hidden">
        {/* Imagen del costado izquierdo */}
        <div
          className="w-full md:w-1/3 bg-cover bg-center"
          style={{ backgroundImage: "url('/Darien_bike.jpg')" }}
        ></div>

        {/* Contenido principal */}
        <div className="w-full md:w-2/3 flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}
