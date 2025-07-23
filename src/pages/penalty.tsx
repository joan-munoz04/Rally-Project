import Button from "@/components/atoms/Button";
import PenaltyTop from "@/components/molecules/penaltyTop";
import CPPreviewTable from "@/components/organisms/CPPreviewTable";
import { useRouter } from "next/router";
import { useState } from "react";

// Simulación: registros de controlPointRegister
const controlRecords = [
  { place: "-", name: "Juan Pérez", countryCode: "co", team: "Rápidos", lastTime: "00:22:06", flag: "🇨🇴", puntoControl: "1", numeroCompetidor: 1, category: "Novato" },
  { place: "-", name: "Ana Gómez", countryCode: "ar", team: "Águilas", lastTime: "00:23:03", flag: "🇦🇷", puntoControl: "1", numeroCompetidor: 2, category: "Avanzado" },
  { place: "-", name: "Carlos Ruiz", countryCode: "mx", team: "Furia", lastTime: "00:25:05", flag: "🇲🇽", puntoControl: "1", numeroCompetidor: 3, category: "Experto" },
  { place: "-", name: "Valentina Rossi", countryCode: "it", team: "Ferrari", lastTime: "00:21:45", flag: "🇮🇹", puntoControl: "2", numeroCompetidor: 4, category: "Novato" },
  { place: "-", name: "David Svensson", countryCode: "se", team: "Toyota", lastTime: "00:24:10", flag: "🇸🇪", puntoControl: "2", numeroCompetidor: 5, category: "Avanzado" },
  { place: "-", name: "Hernando López", countryCode: "es", team: "Yamaha", lastTime: "00:22:06", flag: "🇪🇸", puntoControl: "3", numeroCompetidor: 6, category: "Novato" },
  { place: "-", name: "Sofia Müller", countryCode: "de", team: "BMW", lastTime: "00:23:59", flag: "🇩🇪", puntoControl: "3", numeroCompetidor: 7, category: "Experto" },
  { place: "-", name: "Lucas Silva", countryCode: "br", team: "Honda", lastTime: "00:22:50", flag: "🇧🇷", puntoControl: "4", numeroCompetidor: 8, category: "Avanzado" },
  { place: "-", name: "Marie Dubois", countryCode: "fr", team: "Renault", lastTime: "00:24:30", flag: "🇫🇷", puntoControl: "5", numeroCompetidor: 9, category: "Novato" }
];

function sumTimes(t1: string, t2: string) {
  const [h1, m1, s1] = t1.split(":").map(Number);
  const [h2, m2, s2] = t2.split(":").map(Number);
  let total = h1 * 3600 + m1 * 60 + s1 + h2 * 3600 + m2 * 60 + s2;
  const h = Math.floor(total / 3600);
  total %= 3600;
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

type PenaltyRecord = {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  lastTime: string;
  flag: string;
  puntoControl: string;
  numeroCompetidor: number;
  category: string;
};

export default function Penalty () {
  const router = useRouter();
  const [penaltyRecords, setPenaltyRecords] = useState<PenaltyRecord[]>([]);

  const handleAddPenalty = (penalizedRecord: PenaltyRecord) => {
    setPenaltyRecords([...penaltyRecords, penalizedRecord]);
  };

  return (
    <div className="flex flex-col gap-8 relative p-8">
      <h1 className="text-4xl font-bold text-center">Penalizaciones</h1>
      <PenaltyTop controlRecords={controlRecords} onAddPenalty={handleAddPenalty} sumTimes={sumTimes} />
      <CPPreviewTable records={penaltyRecords} />
      <Button 
        text="Volver" 
        size="small" 
        color="lOrange" 
        icon="material-symbols:arrow-back" 
        iconPosition="left" 
        onClick={() => router.replace("/controlPointRegister")}
        className="absolute top-12 left-12"
      />
      <Button 
        text="Salir" 
        size="small" 
        color="lOrange" 
        icon="material-symbols:exit-to-app" 
        iconPosition="right" 
        onClick={() => router.replace("/login")}
        className="absolute top-12 right-12"
      />
    </div>
  );
}