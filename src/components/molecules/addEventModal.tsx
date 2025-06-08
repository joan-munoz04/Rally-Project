import { useState } from "react";
import Button from "../atoms/Button";

interface AddEventModalProps {
  onAddEvent: (event: { date: string; location: string; categories: string }) => void;
}

const AddEventModal = ({ onAddEvent }: AddEventModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && location && categories) {
      onAddEvent({ date, location, categories });
      setDate("");
      setLocation("");
      setCategories("");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-400 hover:bg-orange-500 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg z-50"
      >
        <span className="text-xl">Agregar Evento</span>
        <span className="text-2xl">
          <span className="iconify" data-icon="mdi:calendar-plus"></span>
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">Agregar un nuevo evento</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-lg">
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 rounded" required />
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Lugar" className="border p-2 rounded" required />
              <input type="text" value={categories} onChange={e => setCategories(e.target.value)} placeholder="Categorías" className="border p-2 rounded" required />
              <Button text="Agregar Evento" icon="mdi:plus" size="small" color="lOrange" iconPosition="left" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEventModal;
