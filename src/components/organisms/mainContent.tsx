import NavButtonGroup from '../molecules/navButtonGroup';

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <img src="/Darien_logo.png" alt="Logo Rally Darién" className="w-80  -m-7 -mt-50" />
      <p className="text-gray-700 max-w-200 text-2xl" >
        Rally Darién es aventura, motor y navegación off-road en su máxima expresión.
        Una travesía desafiante que pone a prueba máquinas, pilotos y trabajo en equipo.
      </p>
      <NavButtonGroup />
    </div>
  );
}
