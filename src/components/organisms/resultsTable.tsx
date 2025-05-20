// components/organisms/ResultsTable.tsx
import ResultsRow from '../molecules/resultsRow';

interface ResultsRowProps {
  place: string;
  name: string;
  countryCode: string; 
  team: string;
  controlPoint: number;
  lastTime: string;
  totalTime: string;
}

interface ResultsTableProps {
  data: ResultsRowProps[];
  title: string;
}

export default function ResultsTable({ data, title }: ResultsTableProps) {
  return (
    <div className="w-full overflow-x-auto mt-6">
      <div className="bg-lOrange text-white text-xl font-bold px-6 py-3 rounded-t-lg">
        {title}
      </div>
      <table className="min-w-full text-sm text-center bg-white shadow-md border border-gray-200">
        <thead className="bg-orange-500 text-white uppercase text-sm">
          <tr>
            <th className="py-2 px-4">Lugar</th>
            <th className="py-2 px-4">Competidor</th>
            <th className="py-2 px-4">Team</th>
            <th className="py-2 px-4">Punto de control</th>
            <th className="py-2 px-4">Tiempo último puesto de control</th>
            <th className="py-2 px-4">Tiempo total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <ResultsRow key={index} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
