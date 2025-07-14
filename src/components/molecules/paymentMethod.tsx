import { useState } from "react";
import Button from "../atoms/Button";
import PaymentRow from "../atoms/paymentRow";

interface PaymentMethodProps {
    paymentNumber1: string;
    paymentNumber2: string;
    paymentNumber3: string;
    paymentNumber4: string;
}

const PaymentMethod = ({ paymentNumber1, paymentNumber2, paymentNumber3, paymentNumber4 }: PaymentMethodProps) => {
    const [activeTab, setActiveTab] = useState("Competencia")
    return (
        <div className="flex flex-col gap-4 border-2 border-[#D9D9D9] rounded-xl">
            <h1 className="text-3xl text-[#1E1E1E]">Medios de pago</h1>
            <div>
                <Button text="Turismo" 
                size="medium"
                color={activeTab === "Turismo" ? "lOrange" : "default"}
                onClick={() => setActiveTab("Turismo")}>
                </Button>
                <Button text="Competencia" 
                size="medium"
                color={activeTab === "Competencia" ? "lOrange" : "default"}
                onClick={() => setActiveTab("Competencia")}>
                </Button>
            </div>
            <div className="flex flex-col gap-2">
                <PaymentRow paymentName="Bancolombia" accNumber={paymentNumber1}></PaymentRow>
                <PaymentRow paymentName="Nequi" accNumber={paymentNumber2}></PaymentRow>
                <PaymentRow paymentName="Daviplata" accNumber={paymentNumber3}></PaymentRow>
                <PaymentRow paymentName="Zelle" accNumber={paymentNumber4}></PaymentRow>
            </div>
        </div>
    )
}

export default PaymentMethod;