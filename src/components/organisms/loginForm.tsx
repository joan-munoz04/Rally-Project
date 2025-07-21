import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../atoms/Button";
import { authorizedUsers } from "@/data/authorizedUsers";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = authorizedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
        router.replace("/controlPointRegister");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
      <img src="/Darien_logo.png" alt="Logo Rally Darien" className="w-80 mb-4 -mt-12" />
      <h2 className="text-4xl font-bold mb-6">Iniciar Sesión</h2>

      <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="usuario" className="block font-medium text-lg text-gray-700 mb-1">
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            className="w-full px-4 py-2 border-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex flex-col w-70 mx-auto h-34 space-y-8 pt-4 font-medium text-lg">
          <Button text="Ingresar" color="lOrange" size="medium" onClick={() => handleLogin}/>
          <Button text="Salir" color="lOrange" size="medium" onClick={() => router.replace("/")} type="button"/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
