import Button from "@/components/atoms/Button";
import ResultsTable from "@/components/organisms/resultsTable";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("novatos");

  const novatos = [
    { place: "1º", name: "Lucas", countryCode: "ar", team: "Suzuki", controlPoint: 6, lastTime: "00:20:45", totalTime: "02:10:45" },
    { place: "2º", name: "Sofía", countryCode: "cl", team: "KTM", controlPoint: 5, lastTime: "00:21:30", totalTime: "02:21:30" },
    { place: "3º", name: "Mateo", countryCode: "uy", team: "Honda", controlPoint: 4, lastTime: "00:19:12", totalTime: "02:09:12" },
    { place: "4º", name: "Isabella", countryCode: "co", team: "Yamaha", controlPoint: 3, lastTime: "00:24:00", totalTime: "01:54:00" },
    { place: "5º", name: "Julián", countryCode: "pe", team: "BMW", controlPoint: 2, lastTime: "00:22:15", totalTime: "01:32:15" },
    ];

    const fourXfours = [
      { place: "1º", name: "Carlos", countryCode: "mx", team: "Ford", controlPoint: 6, lastTime: "00:26:05", totalTime: "02:16:05" },
      { place: "2º", name: "Ana", countryCode: "gt", team: "Jeep", controlPoint: 5, lastTime: "00:27:00", totalTime: "02:27:00" },
      { place: "3º", name: "Jorge", countryCode: "cr", team: "Toyota", controlPoint: 4, lastTime: "00:28:20", totalTime: "02:18:20" },
      { place: "4º", name: "Diana", countryCode: "sv", team: "Chevrolet", controlPoint: 3, lastTime: "00:30:10", totalTime: "01:40:10" },
      { place: "5º", name: "Marco", countryCode: "pa", team: "Nissan", controlPoint: 2, lastTime: "00:32:45", totalTime: "01:32:45" },
    ];

    const trescientos = [
      { place: "1º", name: "Elena", countryCode: "es", team: "Yamaha", controlPoint: 6, lastTime: "00:18:55", totalTime: "01:58:55" },
      { place: "2º", name: "Pablo", countryCode: "pt", team: "KTM", controlPoint: 5, lastTime: "00:20:12", totalTime: "02:08:12" },
      { place: "3º", name: "Raúl", countryCode: "ve", team: "Suzuki", controlPoint: 4, lastTime: "00:19:48", totalTime: "01:49:48" },
      { place: "4º", name: "Marta", countryCode: "bo", team: "Honda", controlPoint: 3, lastTime: "00:21:20", totalTime: "01:31:20" },
      { place: "5º", name: "Iván", countryCode: "do", team: "BMW", controlPoint: 2, lastTime: "00:23:15", totalTime: "01:23:15" },
    ];

    const heavy = [
      { place: "1º", name: "Andrés", countryCode: "cl", team: "Harley-Davidson", controlPoint: 6, lastTime: "00:29:00", totalTime: "02:39:00" },
      { place: "2º", name: "Luisa", countryCode: "ar", team: "Indian", controlPoint: 5, lastTime: "00:30:15", totalTime: "02:40:15" },
      { place: "3º", name: "Ricardo", countryCode: "py", team: "Triumph", controlPoint: 4, lastTime: "00:28:55", totalTime: "02:28:55" },
      { place: "4º", name: "Carla", countryCode: "uy", team: "BMW", controlPoint: 3, lastTime: "00:33:10", totalTime: "01:53:10" },
      { place: "5º", name: "Esteban", countryCode: "co", team: "Ducati", controlPoint: 2, lastTime: "00:34:25", totalTime: "01:34:25" },
    ];

    const maxitrail = [
      { place: "1º", name: "Laura", countryCode: "es", team: "KTM", controlPoint: 6, lastTime: "00:22:33", totalTime: "02:02:33" },
      { place: "2º", name: "Alberto", countryCode: "fr", team: "Honda", controlPoint: 5, lastTime: "00:23:01", totalTime: "02:13:01" },
      { place: "3º", name: "Nina", countryCode: "ch", team: "BMW", controlPoint: 4, lastTime: "00:21:45", totalTime: "02:01:45" },
      { place: "4º", name: "Tobías", countryCode: "de", team: "Yamaha", controlPoint: 3, lastTime: "00:26:05", totalTime: "01:46:05" },
      { place: "5º", name: "Giulia", countryCode: "it", team: "Suzuki", controlPoint: 2, lastTime: "00:27:30", totalTime: "01:47:30" },
    ];

    const pro = [
      { place: "1º", name: "Thiago", countryCode: "br", team: "KTM", controlPoint: 6, lastTime: "00:17:45", totalTime: "01:57:45" },
      { place: "2º", name: "Martina", countryCode: "ar", team: "Yamaha", controlPoint: 5, lastTime: "00:18:12", totalTime: "02:08:12" },
      { place: "3º", name: "Nicolás", countryCode: "uy", team: "Honda", controlPoint: 4, lastTime: "00:19:25", totalTime: "02:09:25" },
      { place: "4º", name: "Fernanda", countryCode: "cl", team: "Suzuki", controlPoint: 3, lastTime: "00:20:15", totalTime: "01:40:15" },
      { place: "5º", name: "Agustín", countryCode: "mx", team: "BMW", controlPoint: 2, lastTime: "00:21:40", totalTime: "01:41:40" },
    ];

    const utv = [
      { place: "1º", name: "Leo", countryCode: "us", team: "Polaris", controlPoint: 6, lastTime: "00:24:45", totalTime: "02:14:45" },
      { place: "2º", name: "Camila", countryCode: "ca", team: "Can-Am", controlPoint: 5, lastTime: "00:26:15", totalTime: "02:26:15" },
      { place: "3º", name: "Omar", countryCode: "mx", team: "Yamaha", controlPoint: 4, lastTime: "00:25:22", totalTime: "02:15:22" },
      { place: "4º", name: "Julia", countryCode: "co", team: "Honda", controlPoint: 3, lastTime: "00:27:30", totalTime: "01:47:30" },
      { place: "5º", name: "André", countryCode: "br", team: "Kawasaki", controlPoint: 2, lastTime: "00:28:55", totalTime: "01:48:55" },
    ];

    const atv = [
      { place: "1º", name: "Sebastián", countryCode: "ar", team: "Yamaha", controlPoint: 6, lastTime: "00:19:33", totalTime: "02:09:33" },
      { place: "2º", name: "Micaela", countryCode: "cl", team: "Honda", controlPoint: 5, lastTime: "00:21:12", totalTime: "02:11:12" },
      { place: "3º", name: "Felipe", countryCode: "bo", team: "Can-Am", controlPoint: 4, lastTime: "00:20:20", totalTime: "01:50:20" },
      { place: "4º", name: "Valeria", countryCode: "ve", team: "Suzuki", controlPoint: 3, lastTime: "00:22:30", totalTime: "01:52:30" },
      { place: "5º", name: "Ramiro", countryCode: "pe", team: "Polaris", controlPoint: 2, lastTime: "00:23:45", totalTime: "01:53:45" },
    ];

    const TresXpertos = [
      { place: "1º", name: "Mariano", countryCode: "uy", team: "KTM", controlPoint: 6, lastTime: "00:18:00", totalTime: "01:58:00" },
      { place: "2º", name: "Luciana", countryCode: "ar", team: "Yamaha", controlPoint: 5, lastTime: "00:19:10", totalTime: "02:09:10" },
      { place: "3º", name: "Bruno", countryCode: "cl", team: "Honda", controlPoint: 4, lastTime: "00:20:22", totalTime: "02:00:22" },
      { place: "4º", name: "Florencia", countryCode: "py", team: "Suzuki", controlPoint: 3, lastTime: "00:21:55", totalTime: "01:41:55" },
      { place: "5º", name: "Emilio", countryCode: "co", team: "BMW", controlPoint: 2, lastTime: "00:22:33", totalTime: "01:42:33" },
    ];

    const turismo = [
      { place: "1º", name: "Gabriel", countryCode: "mx", team: "Harley-Davidson", controlPoint: 6, lastTime: "00:32:00", totalTime: "02:42:00" },
      { place: "2º", name: "Daniela", countryCode: "ar", team: "Indian", controlPoint: 5, lastTime: "00:33:10", totalTime: "02:43:10" },
      { place: "3º", name: "Ramón", countryCode: "cl", team: "BMW", controlPoint: 4, lastTime: "00:30:45", totalTime: "02:30:45" },
      { place: "4º", name: "Paula", countryCode: "es", team: "Ducati", controlPoint: 3, lastTime: "00:35:12", totalTime: "01:55:12" },
      { place: "5º", name: "Santiago", countryCode: "pe", team: "Triumph", controlPoint: 2, lastTime: "00:36:00", totalTime: "01:56:00" },
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
          icon="mdi:exit-to-app"
          iconPosition="right"
          onClick={() => router.push("/")}
          />
        </div>
        
      </div>

      <div className="flex justify-center font-bold space-x-2 mb-10">
        <Button
          text="General"
          size="medium"
          color={activeTab === "control" ? "dOrange" : "grey"}
          onClick={() => router.replace('/results')}
        />

        <Button
          text="Novatos"
          size="medium"
          color={activeTab === "novatos" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("novatos")}
        />
        <Button
          text="4x4's"
          size="medium"
          color={activeTab === "4x4" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("4x4")}
        />

        <Button
          text="300"
          size="medium"
          color={activeTab === "300" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("300")}
        />
        <Button
          text="Heavy"
          size="medium"
          color={activeTab === "heavy" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("heavy")}
        />

        <Button
          text="Maxitrail"
          size="medium"
          color={activeTab === "maxitrail" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("maxitrail")}
        />
        <Button
          text="PRO"
          size="medium"
          color={activeTab === "pro" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("pro")}
        />

        <Button
          text="UTV"
          size="medium"
          color={activeTab === "utv" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("utv")}
        />
        <Button
          text="ATV"
          size="medium"
          color={activeTab === "atv" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("atv")}
        />

        <Button
          text="300 Expertos"
          size="medium"
          color={activeTab === "300exp" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("300exp")}
        />
        <Button
          text="Turismo"
          size="medium"
          color={activeTab === "turismo" ? "dOrange" : "grey"}
          onClick={() => setActiveTab("turismo")}
        />
      </div>


      {/* Tabla */}
      <div className="bg-white shadow-md overflow-x-auto max-w-8xl mx-auto">
        {activeTab === "novatos" && (
          <ResultsTable title="Clasificación" data={novatos} />
        )}
        {activeTab === "4x4" && (
          <ResultsTable title="Clasificación" data={fourXfours} />
        )}
        {activeTab === "300" && (
          <ResultsTable title="Clasificación" data={trescientos} />
        )}
        {activeTab === "heavy" && (
          <ResultsTable title="Clasificación" data={heavy} />
        )}
        {activeTab === "maxitrail" && (
          <ResultsTable title="Clasificación" data={maxitrail} />
        )}
        {activeTab === "pro" && (
          <ResultsTable title="Clasificación" data={pro} />
        )}
        {activeTab === "utv" && (
          <ResultsTable title="Clasificación" data={utv} />
        )}
        {activeTab === "atv" && (
          <ResultsTable title="Clasificación" data={atv} />
        )}
        {activeTab === "300exp" && (
          <ResultsTable title="Clasificación" data={TresXpertos} />
        )}
        {activeTab === "turismo" && (
          <ResultsTable title="Clasificación" data={turismo} />
        )}
      </div>
    </div>
  );
}
