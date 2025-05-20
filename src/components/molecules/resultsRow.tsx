interface ResultsRowProps {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  controlPoint: number;
  lastTime: string;
  totalTime: string;
}

export default function ResultsRow({
  place,
  name,
  countryCode,
  team,
  controlPoint,
  lastTime,
  totalTime,
}: ResultsRowProps) {
  return (
    <tr className="border-t border-gray-200">
      <td className="py-2 px-4 font-medium">{place}</td>
      <td className="py-2 px-4 flex items-center justify-center gap-2">
        <img
          src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
          alt={`Bandera de ${countryCode}`}
          className="w-6 h-4 rounded-sm object-cover"
        />
        <span>{name}</span>
      </td>
      <td className="py-2 px-4">{team}</td>
      <td className="py-2 px-4">{controlPoint}</td>
      <td className="py-2 px-4">{lastTime}</td>
      <td className="py-2 px-4">{totalTime}</td>
    </tr>
  );
}
