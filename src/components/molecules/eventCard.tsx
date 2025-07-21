import Button from "../atoms/Button";
import EventInfo from "../atoms/eventInfo";

interface EventCardProps {
    date: string;
    location: string;
    categories: string;
    onClick?: () => void;
}

const EventCard = ({ date, location, categories, onClick }: EventCardProps) => {
    return (
        <div className="border-2 rounded-2xl border-gray-300 w-full p-5 flex flex-row justify-between items-center">
            <EventInfo date={date} location={location} categories={categories}></EventInfo>
            <Button text="Ver más" icon="mdi:arrow-right-bold" color="lOrange" iconPosition="right" size="small" onClick={onClick}></Button>
        </div>
    )
}

export default EventCard;