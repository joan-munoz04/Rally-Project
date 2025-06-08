import { Icon } from "@iconify/react/dist/iconify.js";

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
    <tr className="border-b flex justify-evenly items-center text-center text-lg border-black">
      <td className="py-4 px-4 font-medium w-[91.06px]">{place}</td>
      <td className="py-4 flex items-center gap-6 w-[149.61px]">
        <Icon icon={`flagpack:${countryCode}`} width={32}></Icon>
        <span>{name}</span>
      </td>
      <td className="py-4 px-4 w-[82.27px]">{team}</td>
      <td className="py-4 px-4 w-[210.47px]">{controlPoint}</td>
      <td className="py-4 px-4 w-[361.77px]">{lastTime}</td>
      <td className="py-4 px-4 w-[158.69px]">{totalTime}</td>
    </tr>
  );
}
