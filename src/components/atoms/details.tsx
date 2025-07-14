import Button from "./Button"

interface DetailsProps {
    details: string;
}

const Details = ({ details }: DetailsProps) => {
    return (
        <div className="flex flex-col gap-2 border-2 border-[#D9D9D9] rounded-xl">
            <h1 className="text-3xl text-[#1E1E1E]">Detalles</h1>
            <p className="text-grey text-lg">{details}</p>
            <Button text="Ver más" color="lOrange" size="small" icon="mdi:plus" iconPosition="right"></Button>
        </div>
    )
}

export default Details;