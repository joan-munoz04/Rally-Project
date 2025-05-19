import UserCard from "@/components/organisms/userCard";
import InfoItem from "@/components/molecules/infoItem";
import CompetenceTable from "@/components/organisms/competenceTable";
import { useRouter } from "next/router";

export default function EditProfile() {
  const router = useRouter();
  const handleSave = () => {
    alert("Guardado!");
  };
  const handleChange = () => {
    alert("Foto cambiada!");
  };

  return (
    <div className="bg-creamOrange min-h-screen flex justify-center items-center px-4 py-8">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-start bg-peach px-6 py-4">
          <div className="flex-grow flex justify-center">
            <UserCard
              bottomButton={{
                text: "Cambiar",
                icon: "mdi:user-add-outline",
                iconPosition: "right",
                onClick: handleChange,
              }}
              avatarUrl="/profPic.jpg"
              leftButton={{
                text: "Guardar",
                icon: "mdi:content-save-outline",
                iconPosition: "right",
                onClick: handleSave,
              }}
              rightButton={{
                text: "Volver",
                icon: "ic:sharp-arrow-back",
                onClick: () => router.replace("/profile"),
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row pl-20 pt-10 pb-25 pr-20">
          <div className="flex-1 flex flex-col gap-4">
            <InfoItem icon="phone" label="Teléfono" value="+1 555 555 5555" />
            <InfoItem icon="shield" label="Grupo sanguíneo y RH" value="O-" />
            <InfoItem
              icon="id"
              label="Documento de identidad"
              value="1000000000"
            />
            <InfoItem
              icon="gift"
              label="Fecha de nacimiento"
              value="09/10/2001"
            />
            <InfoItem icon="alert" label="Alérgico a" value="Acetaminofén" />
            <InfoItem
              icon="contact"
              label="Contacto de emergencia"
              value="Silvia Martínez"
            />
          </div>

          <div className="flex-1">
            <CompetenceTable />
          </div>
        </div>
      </div>
    </div>
  );
}
