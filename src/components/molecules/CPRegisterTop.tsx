import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

interface SelectProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder: string;
}

interface RecordType {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  lastTime: string;
  flag: string;
  puntoControl: string;
  numeroCompetidor: number;
  category: string;
}

interface CompetitorType {
  number: number;
  name: string;
  country: string;
  countryCode: string;
  flag: string;
  team: string;
  category: string;
}

interface CPRegisterTopProps {
  onAddRecord: (record: RecordType) => void;
  competitors: CompetitorType[];
}

const CPRegisterTop = ({ onAddRecord, competitors }: CPRegisterTopProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    puntoControl: "1",
    numeroCompetidor: "1",
    tiempo: ""
  });
  const [foundCompetitor, setFoundCompetitor] = useState<CompetitorType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "numeroCompetidor") {
      const num = parseInt(e.target.value);
      const comp = competitors.find(c => c.number === num);
      setFoundCompetitor(comp || null);
    }
  };

  const handleSave = () => {
    if (!foundCompetitor) return;
    onAddRecord({
      place: "-", // Se puede calcular luego si es necesario
      name: foundCompetitor.name,
      countryCode: foundCompetitor.countryCode, // Usar countryCode para bandera en tabla
      team: foundCompetitor.team,
      lastTime: formData.tiempo,
      flag: foundCompetitor.countryCode, // Usar countryCode para bandera en preview y tabla
      puntoControl: formData.puntoControl,
      numeroCompetidor: foundCompetitor.number,
      category: foundCompetitor.category
    });
    setFormData({ ...formData, tiempo: "" });
  };

  return (
    <div className="relative flex flex-col gap-16 justify-center items-stretch">
      <div className="flex justify-evenly w-full">
        <Select label="Punto de control" name="puntoControl"  onChange={handleChange} options={["1", "2", "3", "4", "5", "6"]} />
        <Input label="Número del competidor" value={formData.numeroCompetidor} name="numeroCompetidor" onChange={handleChange} placeholder="35" />
        <Input label="Tiempo (HH:MM:SS)" value={formData.tiempo} name="tiempo" onChange={handleChange} placeholder="(HH:MM:SS)" />
      </div>
      {foundCompetitor && (
        <div className="flex flex-row items-center justify-center gap-8 mt-4 p-4 bg-orange-100 rounded-xl border border-orange-300">
          <Icon icon={`flagpack:${foundCompetitor.countryCode}`} width={32} />
          <span className="font-bold text-lg">{foundCompetitor.name}</span>
          <span className="text-md">Equipo: {foundCompetitor.team}</span>
          <span className="text-md">Categoría: {foundCompetitor.category}</span>
        </div>
      )}
      <div className="flex justify-center">
        <Button
          color="dOrange"
          size="large"
          text="Guardar"
          icon="material-symbols:save-outline"
          iconPosition="left"
          className="w-60 text-xl"
          onClick={handleSave}
        />
      </div>
      <Button
        text="Penalizaciones"
        size="large"
        color="dOrange"
        icon="material-symbols:warning-outline-rounded"
        iconPosition="left"
        className="absolute bottom-0 right-0 text-xl p-2"
        onClick={() => router.push("/penalty")}
      />
    </div>
  );
};

export default CPRegisterTop;

function Select({ label, name, onChange, options }: SelectProps) {
  return (
    <div className="w-80">
      <label className="block text-medium font-semibold mb-1">{label}</label>
      <select
        name={name}
        onChange={onChange}
        className="w-full border-2 border-orange-400 rounded-lg px-3 py-2 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Input({ label, name, value, onChange, placeholder, type = "text" }: InputProps) {
  return (
    <div className="min-w-80">
      <label className="block text-medium font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-2 border-orange-400 rounded-lg px-3 py-2 focus:outline-none"
      />
    </div>
  );
}