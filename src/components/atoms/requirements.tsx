import { useState } from "react";
import Button from "./Button";

interface RequirementsProps {
    requirements: string;
}

const Requirements = ({ requirements }: RequirementsProps) => {
    const [expanded, setExpanded] = useState(false);

    const displayText = expanded
        ? requirements
        : requirements.slice(0, 200) + (requirements.length > 200 ? "..." : "");

    return (
        <div className="flex flex-col gap-4 border-2 border-[#D9D9D9] rounded-xl p-4">
            <h1 className="text-3xl font-bold text-[#1E1E1E]">Requerimientos mínimos para participar</h1>
            <p className="text-textGray text-xl">SI VAS A COMPETIR</p>
            <p className="text-textGray text-xl whitespace-pre-line">{displayText}</p>

            {requirements.length > 200 && (
                <Button 
                    text={expanded ? "Ver menos" : "Ver más"} 
                    color="lOrange" 
                    size="medium" 
                    icon={expanded ? "mdi:minus" : "mdi:plus"} 
                    iconPosition="right" 
                    className="w-[20%] text-xl"
                    onClick={() => setExpanded(!expanded)}
                />
            )}
        </div>
    );
};

export default Requirements;
