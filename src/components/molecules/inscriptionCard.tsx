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
        <div className="border-2 border-[#D9D9D9] rounded-xl">
            <h1>Tarifas de Inscripción</h1>
            <div className="flex flex-col">
                <PriceRow value1="Motos y ATV" value2="UTV y Carros" variant="categories" className="border-t-0"></PriceRow>
                <PriceRow phase="Preventa" value1={price1Pre} value2={price2Pre} variant="regular"></PriceRow>
                <PriceRow phase="Fase 1" value1={price1Phase1} value2={price2Phase1} variant="regular"></PriceRow>
                <PriceRow phase="Precio full" value1={price1Full} value2={price2Full} variant="regular" className="border-b-0"></PriceRow>
            </div>
            <div className="text-lg bg-creamOrange text-[#F68534] p-2">
                <p><span className="font-semibold">Obtenga la preventa: </span> Puede hacer un abono mínimo de &100.000 para congelar este precio</p>
            </div>
            <Button text="Ver más" icon="mdi:plus" iconPosition="right" color="lOrange" size="small"></Button>
        </div>
    )
}

export default InscriptionCard;