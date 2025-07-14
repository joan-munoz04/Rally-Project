import Button from "./Button";

interface EventDescriptionCardProps {
    description: string;
    image: string;
    locationLink: string;
}

const EventDescriptionCard = ({ description, image, locationLink }: EventDescriptionCardProps) => {
    return (
        <div className="flex flex-col gap-2 bg-creamOrange relative border-2 border-[#D9D9D9] rounded-xl">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Turismo</h1>
                <p>{description}</p>
                <link rel="link" href={locationLink} />
            </div>
            <div>
                <img src={image} alt={image} className="p-2 bg-lightOrange rounded-lg"/>
            </div>
            <Button text="Ver más" icon="mdi:plus" size="small" iconPosition="right" color="lOrange" className="bottom-2 left-2 absolute"></Button>
        </div>
    )
}

export default EventDescriptionCard;