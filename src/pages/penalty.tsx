import Button from "@/components/atoms/Button";
import PenaltyTop from "@/components/molecules/penaltyTop";
import CPPreviewTable from "@/components/organisms/CPPreviewTable";
import { useRouter } from "next/router";

export default function Penalty () {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-8 relative p-8">
            <h1 className="text-4xl font-bold text-center">Penalizaciones</h1>
            <PenaltyTop></PenaltyTop>
            <CPPreviewTable></CPPreviewTable>
            <Button 
            text="Volver" 
            size="small" 
            color="lOrange" 
            icon="material-symbols:arrow-back" 
            iconPosition="left" 
            onClick={() => router.replace("/controlPointRegister")}
            className="absolute top-12 left-12"
            ></Button>
            <Button 
            text="Salir" 
            size="small" 
            color="lOrange" 
            icon="material-symbols:exit-to-app" 
            iconPosition="right" 
            onClick={() => router.replace("/login")}
            className="absolute top-12 right-12"
            ></Button>
        </div>
    )
}