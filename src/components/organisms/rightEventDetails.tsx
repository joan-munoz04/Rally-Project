import Details from "../atoms/details";
import InscriptionCard from "../molecules/inscriptionCard";
import PaymentMethod from "../molecules/paymentMethod";

interface RightEventDetailsProps {
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

export default function RightEventDetails ({ price1Pre, price2Pre, price1Phase1, price2Phase1, price1Full, price2Full, paymentNumber1, paymentNumber2, paymentNumber3, paymentNumber4, details }: RightEventDetailsProps) {
    return (
        <div className="flex flex-col gap-4">
            <InscriptionCard
            price1Pre={price1Pre} 
            price2Pre={price2Pre} 
            price1Phase1={price1Phase1} 
            price2Phase1={price2Phase1} 
            price1Full={price1Full} 
            price2Full={price2Full}
            ></InscriptionCard>
            <PaymentMethod
            paymentNumber1={paymentNumber1} 
            paymentNumber2={paymentNumber2} 
            paymentNumber3={paymentNumber3} 
            paymentNumber4={paymentNumber4}
            ></PaymentMethod>
            <Details details={details}></Details>
        </div>
    )
}