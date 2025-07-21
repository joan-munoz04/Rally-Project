import { Icon } from "@iconify/react/dist/iconify.js";

interface InfoCardProps {
    date: string;
    location: string;
    hotel: string;
}

const InfoCard = ({ date, location , hotel }: InfoCardProps) => {
    return (
        <div className="border-2 border-[#D9D9D9] rounded-xl text-xl w-1/2 h-auto p-6 text-textGray flex flex-col gap-4">
            <div className="flex flex-row items-center gap-8">
                <Icon icon="mdi:calendar-blank-outline" width={48} className="text-lightOrange"></Icon>
                <p>{date}</p>
            </div>
            <div className="flex flex-row items-center gap-8">
                <Icon icon="mdi:location-on-outline" width={48} className="text-lightOrange"></Icon>
                <p>{location}</p>
            </div>
            <div className="flex flex-row items-center gap-8">
                <Icon icon="mdi:bag-suitcase-outline" width={48} className="text-lightOrange"></Icon>
                <p>{hotel}</p>
            </div>
        </div>
    )
}

export default InfoCard;