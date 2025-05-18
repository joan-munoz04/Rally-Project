// pages/login.tsx
import Button from "@/components/atoms/Button";
import{ useRouter } from "next/router";


export default function Login() {
    const router = useRouter();
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Columna Izquierda (puede ser imagen o decorado naranja) */}
      <div
        className="hidden md:block md:w-3/5 bg-cover bg-center h-full"
        style={{ backgroundImage: "url('/Darien_rallyCar.jpg')" }}
      >
        {/* Opcional: superponer fondo naranja semitransparente si se quiere más similar al mockup */}
        {/* <div className="absolute inset-0 bg-orange-500 opacity-30"></div> */}
      </div>

      {/* Columna Derecha - Formulario */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <img src="/Darien_logo.png" alt="Logo Rally Darien" className="w-80 mb-4 -mt-12" />

        <h2 className="text-4xl font-bold mb-6">Iniciar Sesión</h2>

        <form className="w-full max-w-sm space-y-4">
          <div>
            <label htmlFor="usuario" className="block font-medium text-lg text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="nombre.usuario"
              className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-lg text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div className="flex flex-col w-70 mx-auto h-34 space-y-8 pt-4 font-medium text-lg">
            <Button text="Ingresar" color="lOrange" size="medium" variant="orange"/>
            <Button text="Salir" color="lOrange" size="medium" variant="orange" onClick={() => router.replace('/')}/>
        </div>
       </form>
      </div>
    </div>
  );
}
