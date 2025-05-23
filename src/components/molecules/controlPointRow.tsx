interface ControlPointRowProps {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  lastTime: string;
}

export default function ControlPointRow({
  place,
  name,
  countryCode,
  team,
  lastTime,
}: ControlPointRowProps) {
  return (
    <tr className="border-b text-2xl border-black">
      <td className="py-4 px-4 font-medium">{place}</td>
      <td className="py-4 px-4 flex items-center justify-center gap-2">
        <img
          src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
          alt={`Bandera de ${countryCode}`}
          className="w-8 h-5.5  object-cover"
        />
        <span>{name}</span>
      </td>
      <td className="py-2 px-4">{team}</td>
      <td className="py-2 px-4">{lastTime}</td>
    </tr>
  );
}
