import { useState } from "react";
import Button from "@/components/atoms/Button";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

export default function Register() {
  const [formData, setFormData] = useState({
    correo: "",
    nombre: "",
    apellidos: "",
    soat: "",
    telefono: "",
    rol: "Piloto",
    categoria: "Novato",
    fechaNacimiento: "",
    tipoDocumento: "Cédula de ciudadanía",
    documento: "",
    equipo: "",
    eps: "",
    vehiculo: "",
    placas: "",
    comoSeEntero: "Amigo",
    rh: "O-",
    emergenciaNombre: "",
    emergenciaTel: "",
    alergias: "",
    wikiloc: "Sí",
    seguro: "Tengo mi propio seguro todo riesgo",
    terrapirata: "",
    instagram: "",
    facebook: "",
    pais: "Colombia",
    lugarResidencia: "Medellín, Antioquia"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    window.history.back(); // O usar router.push('/') si estás usando useRouter
  };

  const handleRegister = () => {
    alert("Registrado!");
  };

  return (
    <div>
      {/* Header manual */}
      <div className="bg-orange-500 text-white p-4 flex font-medium justify-between items-center">
        <Button text="Registrarse" color="lOrange" size="medium" icon="ic:baseline-assignment" iconPosition="right" onClick={handleRegister} />
        <Button text="Volver" color="lOrange" size="medium" icon="ic:outline-start" iconPosition="right" onClick={handleBack} />
      </div>

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Formulario de Registro</h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Inputs y selects */}
          <Input label="Correo" name="correo" value={formData.correo} onChange={handleChange} />
          <Input label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
          <Input label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} />
          <Input label="SOAT" name="soat" value={formData.soat} onChange={handleChange} type="date" />
          <Input label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
          <Select label="Usted participa como" name="rol" value={formData.rol} onChange={handleChange} options={["Piloto", "Copiloto"]} />
          <Select label="Categoría" name="categoria" value={formData.categoria} onChange={handleChange} options={["Novato", "Avanzado", "Experto"]} />
          <Input label="Fecha de nacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} type="date" />
          <Select label="Tipo de documento" name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} options={["Cédula de ciudadanía", "Pasaporte", "Cédula extranjera"]} />
          <Input label="Documento de identidad" name="documento" value={formData.documento} onChange={handleChange} />
          <Input label="Nombre del equipo" name="equipo" value={formData.equipo} onChange={handleChange} />
          <Input label="EPS" name="eps" value={formData.eps} onChange={handleChange} />
          <Input label="Marca y línea del vehículo" name="vehiculo" value={formData.vehiculo} onChange={handleChange} />
          <Input label="Placas del vehículo" name="placas" value={formData.placas} onChange={handleChange} />
          <Select label="¿Cómo se enteró del evento?" name="comoSeEntero" value={formData.comoSeEntero} onChange={handleChange} options={["Amigo", "Instagram", "Facebook", "Otro"]} />
          <Select label="Tipo de sangre y RH" name="rh" value={formData.rh} onChange={handleChange} options={["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"]} />
          <Input label="Contacto de emergencia" name="emergenciaNombre" value={formData.emergenciaNombre} onChange={handleChange} />
          <Input label="Tel. contacto emergencia" name="emergenciaTel" value={formData.emergenciaTel} onChange={handleChange} />
          <Input label="Alergias (separadas por coma)" name="alergias" value={formData.alergias} onChange={handleChange} />
          <Select label="Wikiloc - APP obligatoria" name="wikiloc" value={formData.wikiloc} onChange={handleChange} options={["Sí", "No"]} />
          <Select label="Seguro de Responsabilidad Civil" name="seguro" value={formData.seguro} onChange={handleChange} options={["Tengo mi propio seguro todo riesgo", "No tengo (se cobrará)"]} />
          <Input label="Terrapirata" name="terrapirata" value={formData.terrapirata} onChange={handleChange} />
          <Input label="Instagram" name="instagram" value={formData.instagram} onChange={handleChange} />
          <Input label="Facebook" name="facebook" value={formData.facebook} onChange={handleChange} />
          <Input label="Nacionalidad" name="pais" value={formData.pais} onChange={handleChange} />
          <Input label="Lugar de residencia" name="pais" value={formData.lugarResidencia} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text" }: InputProps) {
  return (
    <div>
      <label className="block text-medium font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-orange-400 rounded-lg px-3 py-2 focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="block text-medium font-semibold mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-orange-400 rounded-lg px-3 py-2 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
