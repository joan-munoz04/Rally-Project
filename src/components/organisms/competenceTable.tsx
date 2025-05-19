"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CompetenceRow from "../molecules/competenceRow";
import { ChevronDown } from "lucide-react";

const data = [
  { event: "Darien Championship", category: "Novatos", result: "5º lugar" },
  { event: "Adventure Race", category: "PRO", result: "3º lugar" },
  { event: "Trail Challenge", category: "UTV", result: "1º lugar" },
  { event: "Jungle Race", category: "Novatos", result: "6º lugar" },
  { event: "Night Ride", category: "PRO", result: "2º lugar" },
  { event: "Mountain Madness", category: "UTV", result: "1º lugar" },
  { event: "Cross Challenge", category: "Novatos", result: "4º lugar" },
  { event: "Enduro Fest", category: "PRO", result: "1º lugar" },
  { event: "Forest Clash", category: "UTV", result: "2º lugar" },
  { event: "Coastal Cup", category: "Novatos", result: "3º lugar" },
];

export default function CompetenceTable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-t-xl overflow-hidden border-b border-black mt-8 md:mt-4">
      {/* Barra superior */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-white rounded-t-xl border border-gray-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">Historial de competencias</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Contenido desplegable con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Header columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-orange-500 text-white font-semibold px-4 py-2 text-center text-sm sm:text-base">
              <span className="flex justify-center items-center">Evento</span>
              <span className="flex justify-center items-center">Categoría</span>
              <span className="flex justify-center items-center">Resultado</span>
            </div>

            {/* Área scrollable */}
            <div className="max-h-64 overflow-y-auto">
              {data.map((item, i) => (
                <CompetenceRow
                  key={i}
                  event={item.event}
                  category={item.category}
                  result={item.result}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
