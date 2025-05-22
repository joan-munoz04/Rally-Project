import Button from "@/components/atoms/Button";
import ControlPointsTable from "@/components/organisms/controlPointsTable";
//import { useState } from "react";
import { useRouter } from "next/router";

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
      controlPoint: 4,
      lastTime: "00:22:05",
      totalTime: "02:22:05",
    },
    {
      place: "4º",
      name: "Gustavo",
      countryCode: "br",
      team: "BMW",
      controlPoint: 3,
      lastTime: "00:28:08",
      totalTime: "01:28:08",
    },
    {
      place: "5º",
      name: "Schumacher",
      countryCode: "de",
      team: "Honda",
      controlPoint: 2,
      lastTime: "00:29:02",
      totalTime: "01:29:02",
    }
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col justify-between relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center font-bold mb-24">
            Resultados y Clasificaciones
          </h1>
          <p className="absolute text-gray-700 mb-6 text-2xl top-20 left-4">
            Consulta aquí el estado en tiempo real y acumulado de las competencias
          </p>
        </div>
        <div className="absolute top-0 right-0">
          <Button
          text="Salir"
          size="small"
          color="dOrange"
          variant="primary"
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
          color={"dOrange"}
          variant={"altOrange"}
          onClick={() => router.replace('/results/category')}
        />

        <Button
          text="General"
          size="xl"
          color={"dOrange"}
          variant={"altOrange"}
          onClick={() => router.replace('/results')}
        />
      </div>


      {/* Tabla */}
      <div className="bg-white shadow-md  overflow-x-auto max-w-8xl mx-auto">
        {(
          <ControlPointsTable title="Puntos de Control" data={data} />
        //)}
        //{activeTab === "control" && (
        //  <ResultsTable title="Puntos de Control" data={data} />
        //)}
        //{activeTab === "category" && (
        //  <ResultsTable title="Clasificación" data={data} />
        )}
      </div>
    </div>
  );
}
