import {
  Phone,
  Shield,
  CreditCard,
  Gift,
  AlertTriangle,
  UserRound
} from "lucide-react";

interface InfoItemProps {
  icon: "phone" | "shield" | "id" | "gift" | "alert" | "contact";
  label: string;
  value: string;
}

const iconMap = {
  phone: Phone,
  shield: Shield,
  id: CreditCard,
  gift: Gift,
  alert: AlertTriangle,
  contact: UserRound,
};

export default function InfoItem({ icon, label, value }: InfoItemProps) {
  const Icon = iconMap[icon];
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-orange-500" />
      <span className="text-sm font-medium text-gray-800">
        {label}: <span className="font-normal">{value}</span>
      </span>
    </div>
  );
}
