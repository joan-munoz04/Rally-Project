import { createContext, useContext, useState, ReactNode } from "react";
import { FullEventData } from "@/data/eventsData";

interface EventContextType {
  selectedEvent: FullEventData | null;
  setSelectedEvent: (event: FullEventData) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [selectedEvent, setSelectedEvent] = useState<FullEventData | null>(null);

  return (
    <EventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) throw new Error("useEvent must be used within EventProvider");
  return context;
};
