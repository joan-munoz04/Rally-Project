import Button from "./Button"

interface DetailsProps {
    details: string;
}

const Details = ({ details }: DetailsProps) => {
    return (
        <div className="flex flex-col gap-8 border-2 border-[#D9D9D9] rounded-xl p-4 h-full">
            <h1 className="text-3xl font-bold text-[#1E1E1E]">Detalles</h1>
            <p className="text-textGray text-xl whitespace-pre-line">{details}</p>
            <Button text="Ver más" color="lOrange" size="medium" icon="mdi:plus" iconPosition="right" className="w-fit text-xl"></Button>
        </div>
    )
}

export default Details;