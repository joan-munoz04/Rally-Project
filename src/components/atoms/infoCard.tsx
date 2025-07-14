import { Icon } from "@iconify/react/dist/iconify.js";

interface InfoCardProps {
    date: string;
    location: string;
    hotel: string;
}

const InfoCard = ({ date, location , hotel }: InfoCardProps) => {
    return (
        <div className="border-2 border-[#D9D9D9] rounded-xl">
            <div>
                <Icon icon="mdi:calendar-blank-outline"></Icon>
                <p>{date}</p>
            </div>
            <div>
                <Icon icon="mdi:location-on-outline"></Icon>
                <p>{location}</p>
            </div>
            <div>
                <Icon icon="mdi:bag-suitcase-outline"></Icon>
                <p>{hotel}</p>
            </div>
        </div>
    )
}

export default InfoCard;