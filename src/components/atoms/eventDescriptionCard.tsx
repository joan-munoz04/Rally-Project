import { useState } from "react";
import Button from "./Button";

interface EventDescriptionCardProps {
    description: string;
    image: string;
    locationLink: string;
}

const EventDescriptionCard = ({ description, image, locationLink }: EventDescriptionCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const displayText = expanded 
        ? description 
        : description.slice(0, 200) + (description.length > 200 ? "..." : "");

    return (
        <div className="flex flex-row items-center p-4 gap-2 bg-creamOrange/20 relative border-2 border-[#D9D9D9] rounded-xl h-full">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-3xl font-bold">Turismo</h1>
                
                <p className="text-xl text-textGray whitespace-pre-line">
                    {displayText}
                    <br/>
                    <br />
                    Ésta es su ubicación:
                </p>
                <a 
                    href={locationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-textGray hover:text-[#000] underline text-xl"
                >
                    {locationLink}
                </a>

                {description.length > 200 && (
                    <Button 
                        text={expanded ? "Ver menos" : "Ver más"} 
                        icon={expanded ? "mdi:minus" : "mdi:plus"} 
                        size="medium" 
                        iconPosition="right" 
                        color="lOrange" 
                        className="w-[20%] text-xl"
                        onClick={() => setExpanded(!expanded)}
                    />
                )}
            </div>

            <div>
                <img 
                    src={image} 
                    alt="Imagen del evento" 
                    className="p-4 bg-creamOrange/40 rounded-lg w-full max-w-[350px] object-cover"
                />
            </div>
        </div>
    );
};

export default EventDescriptionCard;
