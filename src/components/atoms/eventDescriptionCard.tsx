import Button from "./Button";

interface EventDescriptionCardProps {
    description: string;
    image: string;
    locationLink: string;
}

const EventDescriptionCard = ({ description, image, locationLink }: EventDescriptionCardProps) => {
    return (
        <div className="flex flex-row items-center p-4 gap-2 bg-creamOrange/20 relative border-2 border-[#D9D9D9] rounded-xl h-full">
            <div className="flex flex-col gap-4 w-full">
                <h1 className="text-3xl font-bold">Turismo</h1>
                <p className="text-xl text-textGray">{description} <br/>Ésta es su ubicación:</p>
                <a href={locationLink} target="_#" className="text-textGray hover:text-[#000] underline text-xl">{locationLink}</a>
                <Button text="Ver más" icon="mdi:plus" size="medium" iconPosition="right" color="lOrange" className="w-[20%] text-xl"></Button>
            </div>
            <div>
                <img src={image} alt={image} className="p-4 bg-creamOrange/40 rounded-lg"/>
            </div>
        </div>
    )
}

export default EventDescriptionCard;