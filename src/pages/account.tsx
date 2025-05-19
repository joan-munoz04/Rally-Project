// pages/account.tsx
import UserCard from '@/components/organisms/userCard';
import InfoItem from '@/components/molecules/infoItem';
import CompetenceRow from '@/components/molecules/competenceRow';
import Button from '@/components/atoms/Button';

const AccountPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto flex flex-col gap-6">
      <UserCard name="Juan Pérez" email="juan.perez@example.com" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoItem icon="mdi:calendar" label="Fecha de nacimiento" value="10/05/2000" />
        <InfoItem icon="mdi:school" label="Nivel educativo" value="Universitario" />
        <InfoItem icon="mdi:email" label="Correo electrónico" value="juan.perez@example.com" />
        <InfoItem icon="mdi:map-marker" label="Ubicación" value="Medellín, Colombia" />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Competencias</h2>
        <div className="flex flex-col gap-2">
          <CompetenceRow title="Trabajo en equipo" level="Avanzado" />
          <CompetenceRow title="Comunicación" level="Intermedio" />
          <CompetenceRow title="Resolución de problemas" level="Básico" />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button
          text="Editar perfil"
          size="medium"
          color="dOrange"
          icon="mdi:pencil"
          variant="orange"
          onClick={() => console.log('Editar')}
        />
        <Button
          text="Cerrar sesión"
          size="medium"
          color="grey"
          icon="mdi:logout"
          variant="default"
          onClick={() => console.log('Logout')}
        />
      </div>
    </div>
  );
};

export default AccountPage;
