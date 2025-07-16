import { useState } from "react";
import Button from "../atoms/Button";

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

const PenaltyTop = () => {
    const [formData, setFormData] = useState({
        categoria: "",
        numeroCompetidor: "1",
        tiempo: "",
        penalizacion: "",
        piloto: "",
        puntoControl: 1,
        
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    return (
        <div className="relative flex flex-col gap-4 justify-center items-stretch">
            <div className="flex justify-evenly w-full">
                <Select label="Categoría" name="categoria" onChange={handleChange} options={["Novatos", "4x4's", "300", "Heavy", "Maxitrail", "PRO", "UTV", "ATV", "300 Expertos", "Turismo"]}></Select>
                <Input label="Número del competidor" value={formData.numeroCompetidor} name="numeroCompetidor" onChange={handleChange} placeholder="35"></Input>
                <Input label="Tiempo (HH:MM:SS)" value={formData.tiempo} name="tiempo" onChange={handleChange} placeholder="(HH:MM:SS)"></Input>
                <Input label="Penalización" value={formData.penalizacion} name="penalizacion" onChange={handleChange} placeholder="(HH:MM:SS)"></Input>
            </div>
            <div className="flex justify-between mx-24">
                <Input label="Piloto" value={formData.piloto} name="piloto" onChange={handleChange} placeholder="Nombre Piloto"></Input>
                <Select label="Punto de control" name="puntoControl"  onChange={handleChange} options={["1", "2", "3", "4", "5", "6"]} />
            </div>
            <div className="flex justify-center">
                <Button 
                color="dOrange" 
                size="large" 
                text="Guardar" 
                icon="material-symbols:save-outline" 
                iconPosition="left"
                className="w-60 text-xl"
                onClick={() => alert("Penalización realizada!")}
                ></Button>
            </div>
        </div>
    )
}

export default PenaltyTop;

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