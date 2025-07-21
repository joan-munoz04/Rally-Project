import { Icon } from "@iconify/react/dist/iconify.js";

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
    <tr className="border-b flex justify-evenly items-center text-center text-lg border-black">
      <td className="py-4 px-4 font-medium w-[315.92px]">{place}</td>
      <td className="py-4 flex items-center gap-6 w-[149.61px]">
        <Icon icon={`flagpack:${countryCode}`} width={32}></Icon>
                <span>{name}</span>
      </td>
      <td className="py-2 px-4 w-[82.27px]">{team}</td>
      <td className="py-2 px-4 w-[99.77px]">{lastTime}</td>
    </tr>
  );
}
