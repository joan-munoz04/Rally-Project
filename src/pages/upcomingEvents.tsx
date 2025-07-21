import Button from "@/components/atoms/Button";
import EventCard from "@/components/molecules/eventCard";
import { eventsData } from "@/data/eventsData";
import { useRouter } from "next/router";
import { useEvent } from "@/context/eventContext";

export default function UpcomingEvents() {
  const { setSelectedEvent } = useEvent();
  const router = useRouter();

  const handleEventDetails = (id: string) => {
    const event = eventsData.find((e) => e.id === id);
    if (event) {
      setSelectedEvent(event);
      router.push("/eventDetails");
    }
  };

  return (
    <div className="bg-creamOrange min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-screen-xl h-[90vh] shadow-xl rounded-lg overflow-hidden">

        {/* Imagen lateral */}
        <div className="w-full md:w-1/4 bg-cover bg-center" style={{ backgroundImage: "url('/Darien_bike2.png')" }} />

        {/* Contenido */}
        <div className="w-full md:w-3/4 flex flex-col justify-center items-center gap-8 p-4 relative overflow-auto">
          <Button text="Salir" icon="mdi:exit-to-app" color="lOrange" size="small" iconPosition="right" className="right-6 top-6 absolute" onClick={() => router.replace("/")} />
          <h1 className="text-4xl font-semibold mt-12">Eventos Próximos</h1>
          <p className="text-xl text-center">Consulta los eventos próximos y encuentra en cuáles quieres inscribirte</p>

          {//<AddEventModal onAddEvent={handleAddEvent} /> 
          }
          <div className="w-4/5 flex flex-col overflow-auto gap-6 text-lg">
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                date={event.date}
                location={event.location}
                categories={event.categories}
                onClick={() => handleEventDetails(event.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
