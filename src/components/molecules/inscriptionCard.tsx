import Button from "../atoms/Button";
import PriceRow from "../atoms/priceRow";

interface InscriptionCardProps {
    price1Pre: string;
    price2Pre: string;
    price1Phase1: string;
    price2Phase1: string;
    price1Full: string;
    price2Full: string;
}

const InscriptionCard = ({ price1Pre, price2Pre, price1Phase1, price2Phase1, price1Full, price2Full }: InscriptionCardProps) => {
    return (
        <div className="border-2 border-[#D9D9D9] rounded-xl p-4">
            <h1 className="text-3xl font-bold">Tarifas de Inscripción</h1>
            <div className="flex flex-col">
                <PriceRow value1="Motos y ATV" value2="UTV y Carros" variant="categories" className="border-t-0"></PriceRow>
                <PriceRow phase="Preventa" value1={price1Pre} value2={price2Pre} variant="regular"></PriceRow>
                <PriceRow phase="Fase 1" value1={price1Phase1} value2={price2Phase1} variant="regular"></PriceRow>
                <PriceRow phase="Precio full" value1={price1Full} value2={price2Full} variant="regular" className="border-b-0"></PriceRow>
            </div>
            <div className="text-xl bg-creamOrange/20 text-[#F68534] p-2 border-1 border-[#9E9E9E] m-8 mx-20">
                <p><span className="font-semibold">Obtenga la preventa: </span> Puede hacer un abono mínimo de $100.000 para congelar este precio.</p>
            </div>
            <div className="flex justify-center text-xl">
                <Button text="Ver más" icon="mdi:plus" iconPosition="right" color="lOrange" size="medium"></Button>
            </div>
        </div>
    )
}

export default InscriptionCard;