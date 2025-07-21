import { useState } from "react";
import Button from "./Button";

interface DetailsProps {
  details: string;
}

const Details = ({ details }: DetailsProps) => {
  const [expanded, setExpanded] = useState(false);

  // Limitar a los primeros 200 caracteres si no está expandido
  const displayText = expanded ? details : details.slice(0, 500) + (details.length > 200 ? "..." : "");

  return (
    <div className="flex flex-col gap-8 border-2 border-[#D9D9D9] rounded-xl p-4 h-full">
      <h1 className="text-3xl font-bold text-[#1E1E1E]">Detalles</h1>

      <p className="text-textGray text-xl whitespace-pre-line">{displayText}</p>

      {details.length > 200 && (
        <Button
          text={expanded ? "Ver menos" : "Ver más"}
          color="lOrange"
          size="medium"
          icon={expanded ? "mdi:minus" : "mdi:plus"}
          iconPosition="right"
          className="w-fit text-xl"
          onClick={() => setExpanded(!expanded)}
        />
      )}
    </div>
  );
};

export default Details;
