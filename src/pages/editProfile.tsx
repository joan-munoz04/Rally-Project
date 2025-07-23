import UserCard from "@/components/organisms/userCard";
import { useRouter } from "next/router";
import { useState } from "react";

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

export default function EditProfile() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("/profPic.jpg");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify({
      ...formData,
      avatarUrl,
    }));
    setConfirmMessage("¡Datos guardados exitosamente!");
    setShowConfirmModal(true);
    setTimeout(() => setShowConfirmModal(false), 2000);
  };

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleConfirmImage = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        const profileData = JSON.parse(localStorage.getItem("profileData") || "{}");
        localStorage.setItem("profileData", JSON.stringify({
          ...profileData,
          avatarUrl: reader.result,
        }));
        setShowModal(false);
        setPreviewUrl(null);
        setSelectedImage(null);
        setConfirmMessage("¡Foto de perfil actualizada!");
        setShowConfirmModal(true);
        setTimeout(() => setShowConfirmModal(false), 2000);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPreviewUrl(null);
    setSelectedImage(null);
  };

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
    lugarResidencia: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-creamOrange min-h-screen flex justify-center items-center px-4 py-8 overflow-hidden">
      <div className="bg-white w-full max-w-7xl overflow-hidden p-4 shadow-lg max-h-201">
        <div className="flex justify-between items-start bg-peach px-6 py-4">
          <div className="flex-grow flex justify-center">
            <UserCard
              bottomButton={{
                text: "Cambiar",
                icon: "mdi:user-add-outline",
                iconPosition: "right",
                onClick: handleUpdate,
              }}
              avatarUrl={avatarUrl}
              leftButton={{
                text: "Guardar",
                icon: "mdi:content-save-outline",
                iconPosition: "right",
                onClick: handleSave,
              }}
              rightButton={{
                text: "Volver",
                icon: "ic:sharp-arrow-back",
                onClick: () => router.replace("/profile"),
              }}
            />
          </div>
        </div>

        {/* Modal de confirmación */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 border-2 border-orange-300 flex flex-col items-center animate-fadeIn">
              <span className="text-2xl text-orange-500 font-bold mb-2">{confirmMessage}</span>
              <button
                className="mt-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200"
                onClick={() => setShowConfirmModal(false)}
              >Cerrar</button>
            </div>
          </div>
        )}
        {/* Modal para cambiar foto de perfil */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl flex flex-col items-center p-7 border-2 border-orange-300 animate-fadeIn">
              <h2 className="text-xl font-bold text-orange-500 mb-3 tracking-wide">Cambiar foto de perfil</h2>
              <div className="relative mb-5">
                <img
                  src={previewUrl ? previewUrl : avatarUrl}
                  alt="Preview"
                  className="w-48 h-48 rounded-full object-cover border-4 border-orange-400 shadow-md transition-all duration-300"
                />
                <span className="absolute bottom-2 right-2 bg-orange-400 text-white rounded-full p-1 shadow-lg text-xs">Editar</span>
              </div>
              <label htmlFor="avatarInput" className="mb-4 w-full flex flex-col items-center cursor-pointer">
                <span className="text-lg text-gray-600 mb-1">Selecciona una imagen</span>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="bg-orange-100 text-orange-500 text-lg px-3 py-1 rounded-lg border border-orange-300 hover:bg-orange-200 transition-colors duration-200">Buscar archivo</span>
              </label>
              <div className="flex gap-3 mt-2">
                <button
                  className="bg-orange-400 text-lg hover:bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  onClick={handleCloseModal}
                  type="button"
                >Cancelar</button>
                <button
                  className={`bg-green-500 text-lg hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 ${!previewUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleConfirmImage}
                  type="button"
                  disabled={!previewUrl}
                >Confirmar cambio</button>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 max-w-7xl mx-auto overflow-auto max-h-112">
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
            <Input label="País de origen" name="pais" value={formData.pais} onChange={handleChange} />
            <Input label="Lugar de Residencia" name="lugarResidencia" value={formData.lugarResidencia} onChange={handleChange} />
          </form>
        </div>

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