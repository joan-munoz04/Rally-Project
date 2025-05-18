import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-800">
      <div className="text-center animate-fade-in">
        <Image src="/Darien_logo.png" alt="Logo" width={400} height={400} className="mx-auto" />
        <p className="mt-4 text-lightOrange font-semibold text-3xl">Cargando...</p>
      </div>
    </div>
  );
}
