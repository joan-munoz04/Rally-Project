import { useState } from "react";
import Button from "@/components/atoms/Button";
import EventCard from "@/components/molecules/eventCard";
import AddEventModal from "@/components/molecules/addEventModal";
import { useRouter } from "next/router";

export default function UpcomingEvents() {
  const router = useRouter();
  const [events, setEvents] = useState([
    { date: "2024-05-12", location: "Acapulco", categories: "4x4, ATV" },
    { date: "2025-08-22", location: "Risaralda", categories: "300, UTV" },
    { date: "2026-12-06", location: "Southampton", categories: "300 pro, Trail" },
    { date: "2025-01-19", location: "New Venice", categories: "Novatos" },
  ]);

  const handleAddEvent = (event: { date: string; location: string; categories: string }) => {
    setEvents(prev => [...prev, event]);
  };

  return (
    <div className="bg-creamOrange min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-xl h-[90vh] shadow-xl rounded-lg overflow-hidden">

        {/* Imagen lateral */}
        <div className="w-full md:w-1/4 bg-cover bg-center" style={{ backgroundImage: "url('/Darien_bike2.png')" }} />

        {/* Contenido */}
        <div className="w-full md:w-3/4 flex flex-col justify-center items-center gap-8 p-4 relative overflow-auto">
          <Button text="Salir" icon="mdi:exit-to-app" color="lOrange" size="small" iconPosition="right" className="right-2 top-2 absolute" onClick={() => router.replace("/")} />
          <h1 className="text-4xl font-semibold mt-12">Eventos Próximos</h1>
          <p className="text-xl text-center">Consulta los eventos próximos y encuentra en cuáles quieres inscribirte</p>

          <AddEventModal onAddEvent={handleAddEvent} />

          <div className="w-4/5 flex flex-col overflow-auto gap-6 text-lg">
            {events.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                location={event.location}
                categories={event.categories}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
