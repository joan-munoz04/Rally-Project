import UserCard from "@/components/organisms/userCard";
import InfoItem from "@/components/molecules/infoItem";
import { useRouter } from "next/router";

interface ProfileProps {
  correo: string,
  nombre: string,
  apellidos: string,
  telefono: string,
  rol: string,
  categoria: string,
  fechaNacimiento: string,
  documento: string,
  equipo: string,
  eps: string,
  rh: string,
  emergenciaNombre: string,
  alergias: string,
  pais: string,
  lugarResidencia: string,
}

import { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileProps & { avatarUrl?: string }>({
    correo: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    rol: "",
    categoria: "",
    fechaNacimiento: "",
    documento: "",
    equipo: "",
    eps: "",
    rh: "",
    emergenciaNombre: "",
    alergias: "",
    pais: "",
    lugarResidencia: "",
    avatarUrl: "/profPic.jpg",
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      setProfileData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="bg-creamOrange h-screen flex justify-center items-center px-4 py-8">
      <div className="bg-white w-full max-w-7xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-start bg-peach px-12 py-12">
          <div className="flex-grow flex justify-center">
            <UserCard
              name={`${profileData.nombre} ${profileData.apellidos}`}
              email={profileData.correo}
              avatarUrl={profileData.avatarUrl && profileData.avatarUrl !== "" ? profileData.avatarUrl : "/profPic.jpg"}
              leftButton={{
                text: "Editar",
                icon: "ic:round-mode-edit",
                iconPosition: "right",
                onClick: () => router.replace("editProfile"),
              }}
              rightButton={{
                text: "Salir",
                icon: "ic:outline-start",
                iconPosition: "right",
                onClick: () => router.replace("/"),
              }}
            />
          </div>
        </div>

        <div className="flex flex-row justify-evenly pb-25">
          <div className="flex flex-col gap-4">
            <InfoItem icon="mdi:phone" label="Teléfono" value={profileData.telefono} />
            <InfoItem icon="mdi:shield" label="Grupo sanguíneo y RH" value={profileData.rh} />
            <InfoItem
              icon="material-symbols:identity-platform"
              label="Documento de identidad"
              value={profileData.documento}
            />
            <InfoItem
              icon="mdi:gift"
              label="Fecha de nacimiento"
              value={profileData.fechaNacimiento}
            />
            <InfoItem icon="mdi:alert" label="Alérgico a" value={profileData.alergias} />
            <InfoItem
              icon="mdi:contact"
              label="Contacto de emergencia"
              value={profileData.emergenciaNombre}
            />
          </div>
        
          <div className="flex flex-col gap-4">
            <InfoItem icon="mdi:flag" label="Nacionalidad" value={profileData.pais} />
            <InfoItem icon="mdi:location" label="Localidad de residencia" value={profileData.lugarResidencia} />
            <InfoItem
              icon="mdi:label"
              label="Categoría"
              value={profileData.categoria}
            />
            <InfoItem
              icon="mdi:heart"
              label="EPS"
              value={profileData.eps}
            />
            <InfoItem
              icon="mdi:people"
              label="Nombre del equipo"
              value={profileData.equipo}
            />
            <InfoItem
              icon="mdi:star"
              label="Participación"
              value= {profileData.rol}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;