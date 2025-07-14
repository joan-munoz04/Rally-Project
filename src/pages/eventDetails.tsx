import Button from "@/components/atoms/Button";
import LeftEventDetails from "@/components/organisms/leftEventDetails";
import RightEventDetails from "@/components/organisms/rightEventDetails";

interface EventDetailsProps {
    date: string;
    location: string;
    hotel: string;
    description: string;
    image: string;
    locationLink: string;
    videoURL: string;
    requirements: string;
    price1Pre: string;
    price2Pre: string;
    price1Phase1: string;
    price2Phase1: string;
    price1Full: string;
    price2Full: string;
    paymentNumber1: string;
    paymentNumber2: string;
    paymentNumber3: string;
    paymentNumber4: string;
    details: string;
}

export default function EventDetails ({ date, location, hotel, description, image, locationLink, videoURL, requirements, price1Pre, price2Pre, price1Phase1, price2Phase1, price1Full, price2Full, paymentNumber1, paymentNumber2, paymentNumber3, paymentNumber4, details }: EventDetailsProps) {
    return (
        <div className="space-x-2 relative">
            <h1 className="text-3xl text-start">Detalles del evento</h1>
            <Button text="Volver" icon="mdi:arrow-left" iconPosition="left" color="lOrange" size="small" className="absolute top-2 right-2"></Button>
            <div className="w-1/2">
                <LeftEventDetails 
                date={date} 
                location={location} 
                hotel={hotel} 
                description={description} 
                image={image}
                locationLink={locationLink}
                videoURL={videoURL}
                requirements={requirements}
                ></LeftEventDetails>
            </div>
            <div className="w-1/2">
                <RightEventDetails
                price1Pre={price1Pre} 
                price2Pre={price2Pre} 
                price1Phase1={price1Phase1} 
                price2Phase1={price2Phase1} 
                price1Full={price1Full} 
                price2Full={price2Full}
                paymentNumber1={paymentNumber1} 
                paymentNumber2={paymentNumber2} 
                paymentNumber3={paymentNumber3} 
                paymentNumber4={paymentNumber4}
                details={details}
                ></RightEventDetails>
            </div>
        </div>
    )
}