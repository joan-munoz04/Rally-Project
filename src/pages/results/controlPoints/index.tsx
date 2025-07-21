import Button from "@/components/atoms/Button";
import ControlPointsTable from "@/components/organisms/controlPointsTable";
//import { useState } from "react";
import { useRouter } from "next/router";

interface SelectProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

export default function Results() {
  const router = useRouter();
  //const [activeTab, setActiveTab] = useState("general");

  const data = [
    {
      place: "1º",
      name: "Hernando",
      countryCode: "es",
      team: "Yamaha",
      controlPoint: 6,
      lastTime: "00:25:06",
      totalTime: "02:25:06",
    },
    {
      place: "2º",
      name: "Valentina",
      countryCode: "it",
      team: "Ferrari",
      controlPoint: 5,
      lastTime: "00:24:03",
      totalTime: "02:44:03",
    },
    {
      place: "3º",
      name: "David",
      countryCode: "se",
      team: "Toyota",
      lastTime: "00:22:05",
    },
    {
      place: "4º",
      name: "Gustavo",
      countryCode: "br",
      team: "BMW",
      lastTime: "00:28:08",
    },
    {
      place: "5º",
      name: "--------",
      countryCode: "--",
      team: "------",
      lastTime: "--------",
    }
  ];

  const handleChange = () => {
    //Llamar info de cada punto de control
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col justify-between relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center font-bold mb-24">
            Resultados y Clasificaciones por Punto de Control
          </h1>
          <p className="absolute text-gray-700 mb-6 text-2xl top-20 left-4">
            Consulta aquí el estado de cada punto de control de la competencia
          </p>
        </div>
        <div className="absolute top-40 left-4 w-sm text-xl">
          <Select label="Seleccionar punto de control" name="cp" onChange={handleChange} options={["1", "2", "3", "4", "5", "6"]} />
        </div>
        <div className="absolute top-0 right-0">
          <Button
          text="Salir"
          size="small"
          color="dOrange"
          icon="mdi:exit-to-app"
          iconPosition="right"
          onClick={() => router.push("/")}
          />
        </div>
        
      </div>

      <div className="flex justify-end font-bold space-x-40 mb-10 mr-40">
        <Button
          text="Categorías"
          size="xl"
          color="grey"
          onClick={() => router.replace('/results/category')}
        />

        <Button
          text="General"
          size="xl"
          color="dOrange"
          onClick={() => router.replace('/results')}
        />
      </div>


      {/* Tabla */}
      <div className="bg-white shadow-md  overflow-x-auto max-w-8xl mx-auto">
        {(
          <ControlPointsTable title="Puntos de Control" data={data} />
        )}
      </div>
    </div>
  );
}

function Select({ label, name, onChange, options }: SelectProps) {
  return (
    <div>
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