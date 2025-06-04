import { Icon } from "@iconify/react/dist/iconify.js";

interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

export default function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon icon={icon} className="text-orange-500" width={35}></Icon>
      <span className="text-sm font-medium text-gray-800">
        {label}: <span className="font-normal">{value}</span>
      </span>
    </div>
  );
}
