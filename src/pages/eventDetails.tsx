import Button from "@/components/atoms/Button";
import LeftEventDetails from "@/components/organisms/leftEventDetails";
import RightEventDetails from "@/components/organisms/rightEventDetails";
import { useEvent } from "@/context/eventContext";
import { useRouter } from "next/router";

export default function EventDetails () {
    const { selectedEvent } = useEvent();
    const router = useRouter();

    if (!selectedEvent) {
    return <p className="text-center text-xl">No se ha seleccionado ningún evento.</p>;
  }

  const {
    date, location, hotel, description, image, locationLink, videoURL, requirements,
    price1Pre, price2Pre, price1Phase1, price2Phase1, price1Full, price2Full,
    paymentNumber1, paymentNumber2, paymentNumber3, paymentNumber4, details
  } = selectedEvent;

    return (
        <div className="space-x-12 relative lg:px-16 xl:px-32 px-8 p-24 flex">
            <h1 className="text-4xl top-18 font-bold absolute">Detalles del evento</h1>
            <Button 
            text="Volver" 
            icon="mdi:arrow-left" 
            iconPosition="left" 
            color="lOrange" 
            size="medium" 
            className="absolute top-8 right-4 text-xl"
            onClick={() => router.back()}
            ></Button>
            <div className="w-[50%] mt-16">
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
            <div className="w-[50%] mt-16">
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