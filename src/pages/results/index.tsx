import Button from "@/components/atoms/Button";
import ResultsTable from "@/components/organisms/resultsTable";
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

      <div className="flex justify-center font-bold space-x-40 mb-10">
        <Button
          text="Puntos de control"
          size="xl"
          //color={activeTab === "control" ? "dOrange" : "grey"}
          //variant={activeTab === "control" ? "altOrange" : ""}
          color="grey"
          variant="grey"
          onClick={() => router.replace('/results/controlPoints')}
        />

        <Button
          text="Categorías"
          size="xl"
          //color={activeTab === "category" ? "dOrange" : "grey"}
          //variant={activeTab === "category" ? "altOrange" : ""}
          color="dOrange"
          variant="altOrange"
          onClick={() => router.replace('/results/category')}
        />
      </div>


      {/* Tabla */}
      <div className="bg-white shadow-md overflow-x-auto max-w-8xl mx-auto">
        {(
          <ResultsTable title="Clasificación General" data={data} />
        )}
      </div>
    </div>
  );
}
