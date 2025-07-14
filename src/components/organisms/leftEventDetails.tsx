import EventDescriptionCard from "../atoms/eventDescriptionCard";
import InfoCard from "../atoms/infoCard";
import RequiredApps from "../atoms/requiredApps";
import Requirements from "../atoms/requirements";
import VehicleCard from "../atoms/vehicleCard";
import VideoCard from "../molecules/videoCard";

interface LeftEventDetailsProps {
    date: string;
    location: string;
    hotel: string;
    description: string;
    image: string;
    locationLink: string;
    videoURL: string;
    requirements: string;
}

export default function LeftEventDetails ({ date, location, hotel, description, image, locationLink, videoURL, requirements }: LeftEventDetailsProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <InfoCard 
                date={date} 
                location={location} 
                hotel={hotel}
                ></InfoCard>
                <VehicleCard></VehicleCard>
            </div>
            <EventDescriptionCard 
            description={description} 
            image={image} 
            locationLink={locationLink}
            ></EventDescriptionCard>
            <RequiredApps></RequiredApps>
            <VideoCard videoURL={videoURL}></VideoCard>
            <Requirements requirements={requirements}></Requirements>
        </div>
    )
}