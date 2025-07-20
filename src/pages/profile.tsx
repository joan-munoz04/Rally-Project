import UserCard from "@/components/organisms/userCard";
import InfoItem from "@/components/molecules/infoItem";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  return (
    <div className="bg-creamOrange h-screen flex justify-center items-center px-4 py-8">
      <div className="bg-white w-full max-w-7xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-start bg-peach px-12 py-12">
          <div className="flex-grow flex justify-center">
            <UserCard
              name="Valentina Cadena"
              email="valentina.cadenaz@udea.edu.co"
              avatarUrl="/profPic.jpg"
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
            <InfoItem icon="mdi:phone" label="Teléfono" value="+1 555 555 5555" />
            <InfoItem icon="mdi:shield" label="Grupo sanguíneo y RH" value="O-" />
            <InfoItem
              icon="material-symbols:identity-platform"
              label="Documento de identidad"
              value="1000000000"
            />
            <InfoItem
              icon="mdi:gift"
              label="Fecha de nacimiento"
              value="09/10/2001"
            />
            <InfoItem icon="mdi:alert" label="Alérgico a" value="Acetaminofén" />
            <InfoItem
              icon="mdi:contact"
              label="Contacto de emergencia"
              value="Silvia Martínez"
            />
          </div>
        
          <div className="flex flex-col gap-4">
            <InfoItem icon="mdi:flag" label="Nacionalidad" value="Colombiana" />
            <InfoItem icon="mdi:location" label="Localidad de residencia" value="Medellín, Colombia" />
            <InfoItem
              icon="mdi:label"
              label="Categoría"
              value="Novato"
            />
            <InfoItem
              icon="mdi:heart"
              label="EPS"
              value="Sura"
            />
            <InfoItem
              icon="mdi:people"
              label="Nombre del equipo"
              value="Los Vengadores"
            />
            <InfoItem
              icon="mdi:star"
              label="Participación"
              value="Piloto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
