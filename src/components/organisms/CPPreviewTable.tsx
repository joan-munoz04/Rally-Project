import ControlPointsTable from "./controlPointsTable";

interface CPPreviewTableProps {
  records?: Array<{
    place: string;
    name: string;
    countryCode: string;
    team: string;
    lastTime: string;
    flag: string;
    puntoControl: string;
    numeroCompetidor: number;
    category: string;
  }>;
}

function parseTimeToSeconds(time: string) {
  const [h = "0", m = "0", s = "0"] = time.split(":");
  return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s);
}

const CPPreviewTable = ({ records = [] }: CPPreviewTableProps) => {
  let data;
  if (records && records.length > 0) {
    // Ordenar por tiempo ascendente
    const sorted = [...records].sort((a, b) => parseTimeToSeconds(a.lastTime) - parseTimeToSeconds(b.lastTime));
    // Asignar posición
    data = sorted.map((r, i) => ({ ...r, place: `${i + 1}º` }));
  } else {
    data = [
      {
        place: "1°",
        countryCode: "es",
        name: "Hernando",
        team: "Yamaha",
        lastTime: "00:22:06",
        flag: "🇪🇸",
        puntoControl: "1",
        numeroCompetidor: 1,
        category: "Novato"
      }
    ];
  }
  return (
    <div className="p-8 flex flex-col gap-4 border-2 border-[#D9D9D9] rounded-xl mx-24">
      <h2 className="underline text-xl">Vista Previa Puesto de Control Seleccionado</h2>
      <div className="px-24">
        <ControlPointsTable data={data} />
      </div>
    </div>
  );
};

export default CPPreviewTable;