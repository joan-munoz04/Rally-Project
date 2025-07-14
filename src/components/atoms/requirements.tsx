import Button from "./Button";

interface RequirementsProps {
    requirements: string;
}

const Requirements = ({ requirements }: RequirementsProps) => {
    return (
        <div className="flex flex-col gap-2 border-2 border-[#D9D9D9] rounded-xl">
            <h1 className="text-3xl text-[#1E1E1E]">Requerimientos mínimos para participar</h1>
            <p className="text-grey text-lg">SI VAS A COMPETIR</p>
            <p className="text-grey text-lg">{requirements}</p>
               <Button text="Ver más" color="lOrange" size="small" icon="mdi:plus" iconPosition="right"></Button>
        </div>
    )
}

export default Requirements;