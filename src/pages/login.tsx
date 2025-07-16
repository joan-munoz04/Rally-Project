// pages/login.tsx
import LoginForm from "@/components/organisms/loginForm";


export default function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Columna Izquierda */}
      <div
        className="hidden md:block md:w-3/5 bg-cover bg-center h-full"
        style={{ backgroundImage: "url('/Darien_rallyCar.jpg')" }}
      >
      </div>

      {/* Columna Derecha - Formulario */}
      <LoginForm></LoginForm>
    </div>
  );
}
