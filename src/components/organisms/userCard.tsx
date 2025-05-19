// components/organisms/UserCard.tsx
import React from 'react';
import Button from '../atoms/Button';
import { useRouter } from 'next/router';
// import { Pencil, LogOut } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

const UserCard = ({ name, email, avatarUrl }: UserCardProps) => {
  const router = useRouter();
  return (
    <div className="relative bg-softOrange rounded-2xl shadow-lg p-2 flex flex-col items-center w-full  mx-auto">
      {/* Botones en la esquina superior derecha
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
          <Pencil size={16} />
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full">
          <LogOut size={16} />
        </button>
      </div> */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
        <Button
          text="Editar"
          size="small"
          icon="ic:round-mode-edit"
          color="lOrange"
        />
        <Button
          text="Salir"
          size="small"
          icon="ic:outline-start"
          color="lOrange"
          onClick={() => router.replace('/')}
        />
      </div>

      {/* Avatar */}
      <div className="w-58 h-58 rounded-full overflow-hidden  shadow-md mb-2">
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white text-4xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Nombre y correo */}
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-800">{name}</h3>
        <p className="text-2xl text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
