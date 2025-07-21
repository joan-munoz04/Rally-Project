import Button from "@/components/atoms/Button";
import CPRegisterTop from "@/components/molecules/CPRegisterTop";
import CPPreviewTable from "@/components/organisms/CPPreviewTable";
import { useRouter } from "next/router";

export default function ControlPointRegister () {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-10 relative p-10">
            <h1 className="text-4xl font-bold text-center">Registro Punto de Control</h1>
            <CPRegisterTop></CPRegisterTop>
            <CPPreviewTable></CPPreviewTable>
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