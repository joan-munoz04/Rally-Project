import { useState } from "react";
import Button from "../atoms/Button";
import { Icon } from "@iconify/react";

interface RecordType {
  place: string;
  name: string;
  countryCode: string;
  team: string;
  lastTime: string;
  flag: string;
  puntoControl: string;
  numeroCompetidor: number;
  category: string;
}

interface PenaltyTopProps {
  controlRecords: RecordType[];
  onAddPenalty: (record: RecordType) => void;
  sumTimes?: (t1: string, t2: string) => string;
}

const PenaltyTop = ({ controlRecords, onAddPenalty, sumTimes }: PenaltyTopProps) => {
  const [formData, setFormData] = useState({
    categoria: "Novato",
    numeroCompetidor: "1",
    penalizacion: "00:00:00",
    name: "",
    team: "",
    countryCode: "",
    puntoControl: "1",
    lastTime: ""
  });
  const [foundRecord, setFoundRecord] = useState<RecordType | null>(null);

  // Autocompletar campos al seleccionar competidor y categoría
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newForm = { ...formData, [name]: value };
    if (name === "numeroCompetidor" || name === "categoria") {
      const num = parseInt(name === "numeroCompetidor" ? value : formData.numeroCompetidor);
      const cat = name === "categoria" ? value : formData.categoria;
      const rec = controlRecords.find(r => r.numeroCompetidor === num && r.category === cat);
      if (rec) {
        newForm = {
          ...newForm,
          name: rec.name,
          team: rec.team,
          countryCode: rec.countryCode,
          puntoControl: rec.puntoControl,
          lastTime: rec.lastTime
        };
        setFoundRecord(rec);
      } else {
        setFoundRecord(null);
      }
    }
    setFormData(newForm);
  };

  const handleSave = () => {
    if (!foundRecord) return;
    const penalizedTime = sumTimes ? sumTimes(foundRecord.lastTime, formData.penalizacion) : foundRecord.lastTime;
    onAddPenalty({
      ...foundRecord,
      lastTime: penalizedTime
    });
    setFormData({ ...formData, penalizacion: "00:00:00" });
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center mb-4">
      <div className="w-full flex flex-row justify-between px-24 gap-6 mb-2">
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Categoría</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange} className="border-2 border-orange-400 rounded-lg px-3 py-2">
            <option value="Novato">Novatos</option>
            <option value="Avanzado">Avanzados</option>
            <option value="Experto">Expertos</option>
          </select>
        </div>
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Número del competidor</label>
          <input name="numeroCompetidor" value={formData.numeroCompetidor} onChange={handleChange} placeholder="Número competidor" className="border-2 border-orange-400 rounded-lg px-3 py-2" />
        </div>
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Tiempo (HH:MM:SS)</label>
          <input name="lastTime" value={formData.lastTime} onChange={handleChange} placeholder="(HH:MM:SS)" className="border-2 border-orange-400 rounded-lg px-3 py-2" disabled />
        </div>
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Penalización</label>
          <input name="penalizacion" value={formData.penalizacion} onChange={handleChange} placeholder="Penalización (HH:MM:SS)" className="border-2 border-orange-400 rounded-lg px-3 py-2" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between px-24 gap-6 mb-2">
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Piloto</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre Piloto" className="border-2 border-orange-400 rounded-lg px-3 py-2" disabled />
        </div>
        <div className="flex flex-col min-w-1/6 gap-2">
          <label className="font-semibold">Punto de control</label>
          <select name="puntoControl" value={formData.puntoControl} onChange={handleChange} className="border-2 border-orange-400 rounded-lg px-3 py-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <Button text="Guardar" color="dOrange" size="large" icon="material-symbols:save-outline" iconPosition="left" onClick={handleSave} className="mx-auto" />
      </div>
      {foundRecord && (
        <div className="flex flex-row items-center justify-center gap-8 mt-2 p-4 bg-orange-100 rounded-xl border border-orange-300 w-fit mx-auto">
          <Icon icon={`flagpack:${foundRecord.countryCode}`} width={32} />
          <span className="font-bold text-lg">{foundRecord.name}</span>
          <span className="text-md">Equipo: {foundRecord.team}</span>
          <span className="text-md">Categoría: {foundRecord.category}</span>
          <span className="text-md">Punto de control: {foundRecord.puntoControl}</span>
          <span className="text-md">Tiempo original: {foundRecord.lastTime}</span>
        </div>
      )}
    </div>
  );
};

export default PenaltyTop;