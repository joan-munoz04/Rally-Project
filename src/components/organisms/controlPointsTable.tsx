// components/organisms/ResultsTable.tsx
import ControlPointRow from "../molecules/controlPointRow";

interface ControlPointRowProps {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  lastTime: string;
}

interface ControlPointsTableProps {
  data: ControlPointRowProps[];
  title?: string;
}

export default function ResultsTable({ data, title }: ControlPointsTableProps) {
  return (
    <div className="w-full overflow-x-auto max-h-145 overflow-y-auto mt-6">
      <div className="bg-darkOrange text-white text-4xl font-bold py-3 px-6 rounded-t-xl text-center max-w-8xl mx-auto mb-0">
        {title}
      </div>
      <table className="min-w-full text-center flex flex-col justify-center items-center w-full bg-white shadow-md">
        <thead className="bg-lightOrange w-full flex justify-evenly text-white uppercase text-lg">
          <tr className="w-full flex flex-row justify-evenly items-center">
            <th className="py-4 px-4">Lugar por punto de control</th>
            <th className="py-2 px-4">Competidor</th>
            <th className="py-2 px-4">Team</th>
            <th className="py-2 px-4">Tiempo</th>
          </tr>
        </thead>
          <tbody className="w-full">
            {data.map((row, index) => (
              <ControlPointRow key={index} {...row} />
            ))}
          </tbody>
      </table>
    </div>
  );
}
