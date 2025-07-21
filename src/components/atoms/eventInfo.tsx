import { Icon } from "@iconify/react/dist/iconify.js";

interface EventInfoProps {
    date: string;
    location: string;
    categories: string;
}

const EventInfo = ({date, location, categories }: EventInfoProps) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-12">
                <div className="flex gap-2 items-center">
                    <Icon icon="material-symbols:calendar-month-outline" width={24}></Icon>
                    <p>{date}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Icon icon="material-symbols:location-on" width={24}></Icon>
                    <p>{location}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Icon icon="mdi:cube-outline" width={24}></Icon>
                <p>{`Categorías: ${categories}`}</p>
            </div>
        </div>
    )
}

export default EventInfo;