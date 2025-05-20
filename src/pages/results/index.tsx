import Button from "@/components/atoms/Button";
import ResultsTable from "@/components/organisms/resultsTable";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("control");

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
    },
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl text-center font-bold mb-2">
            Resultados y Clasificaciones
          </h1>
          <p className="text-gray-700 mb-6">
            Consulta aquí el estado en tiempo real y acumulado de las competencias
          </p>
        </div>
        <Button
          text="Salir"
          size="small"
          color="dOrange"
          variant="primary"
          icon="ic:sharp-arrow-back"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex justify-center space-x-40 mb-10">
        <Button
          text="Puntos de control"
          size="xl"
          color={activeTab === "control" ? "dOrange" : "grey"}
          variant={activeTab === "control" ? "altOrange" : ""}
          onClick={() => setActiveTab("control")}
        />

        <Button
          text="Categorías"
          size="xl"
          color={activeTab === "category" ? "dOrange" : "grey"}
          variant={activeTab === "category" ? "altOrange" : ""}
          onClick={() => setActiveTab("category")}
        />
      </div>

      {/* Título centrado sobre la tabla */}
      <div className="bg-orange-500 text-white text-xl font-semibold py-3 px-6 rounded-t-xl text-center max-w-5xl mx-auto mb-0">
        Clasificación General
      </div>

      {/* Tabla */}
      <div className="bg-white shadow-md rounded-b-xl overflow-x-auto max-w-5xl mx-auto">
        {activeTab === "control" && (
          <ResultsTable title="Clasificación General" data={data} />
        )}
        {activeTab === "category" && (
          <div className="p-6 text-center text-gray-600">
            Aquí se mostrarán las clasificaciones por categoría.
          </div>
        )}
      </div>
    </div>
  );
}
