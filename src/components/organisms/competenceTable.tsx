import CompetenceRow from "../molecules/competenceRow";
import { ChevronDown } from "lucide-react";

const data = [
  { event: "Darien Championship", category: "Novatos", result: "5º lugar" },
  { event: "Adventure Race", category: "PRO", result: "3º lugar" },
  { event: "Trail Challenge", category: "UTV", result: "1º lugar" },
];

export default function CompetenceTable() {
  return (
    <div className="rounded-t-xl overflow-hidden border-b  border-black">
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-2 bg-white rounded-t-xl border-1 border-gray-300">
        <span className="font-semibold">Historial de competencias</span>
        <ChevronDown size={18} />
      </div>
      <div>
        <div className="grid grid-cols-3 bg-orange-500 text-white font-semibold border-b border-black px-8 py-2 text-center">
          <span className="flex justify-center items-center">Evento</span>
          <span className="flex justify-center items-center">Categoría</span>
          <span className="flex justify-center items-center">Resultado</span>
        </div>
        {data.map((item, i) => (
          <CompetenceRow
            key={i}
            event={item.event}
            category={item.category}
            result={item.result}
          />
        ))}
      </div>
    </div>
  );
}
