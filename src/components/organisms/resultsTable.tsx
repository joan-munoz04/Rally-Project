// components/organisms/ResultsTable.tsx
import ResultsRow from "../molecules/resultsRow";

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
    <div className="w-full overflow-x-auto max-h-145 overflow-y-auto mt-6">
      <div className="bg-darkOrange text-white text-4xl font-bold py-3 rounded-t-xl text-center max-w-8xl">
        {title}
      </div>
      <table className="min-w-full text-center flex flex-col justify-center items-center w-full bg-white shadow-md">
        <thead className="bg-lightOrange w-full flex justify-evenly text-white uppercase text-lg">
          <tr className="w-full flex flex-row justify-evenly items-center">
            <th className="py-4 px-4">Lugar</th>
            <th className="py-4 px-4">Competidor</th>
            <th className="py-4 px-4">Team</th>
            <th className="py-4 px-4">Punto de control</th>
            <th className="py-4 px-4">Tiempo último puesto de control</th>
            <th className="py-4 px-4">Tiempo total</th>
          </tr>
        </thead>
          <tbody className="w-full flex flex-col">
            {data.map((row, index) => (
              <ResultsRow key={index} {...row} />
            ))}
          </tbody>
      </table>
    </div>
  );
}
