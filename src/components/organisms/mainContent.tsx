import NavButtonGroup from '../molecules/navButtonGroup';

export default function MainContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6">
      <img src="/Darien_logo.png" alt="Logo Rally Darién" className="w-64 md:w-80" />
      <p className="text-gray-700 max-w-2xl -mt-12 mb-4 text-lg md:text-2xl">
        Rally Darién es aventura, motor y navegación off-road en su máxima expresión.
        Una travesía desafiante que pone a prueba máquinas, pilotos y trabajo en equipo.
      </p>
      <NavButtonGroup />
    </div>
  );
}
