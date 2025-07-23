import Button from "@/components/atoms/Button";
import CPRegisterTop from "@/components/molecules/CPRegisterTop";
import CPPreviewTable from "@/components/organisms/CPPreviewTable";
import { useRouter } from "next/router";

import { useState } from "react";
import { competitors } from "@/data/competitorsData";

export default function ControlPointRegister () {
    const router = useRouter();
    type RecordType = {
        place: string;
        name: string;
        countryCode: string;
        team: string;
        lastTime: string;
        flag: string;
        puntoControl: string;
        numeroCompetidor: number;
        category: string;
    };

    const [records, setRecords] = useState<RecordType[]>([]);

    const handleAddRecord = (record: RecordType) => {
        setRecords([...records, record]);
    };

    return (
        <div className="flex flex-col gap-10 relative p-10">
            <h1 className="text-4xl font-bold text-center">Registro Punto de Control</h1>
            <CPRegisterTop onAddRecord={handleAddRecord} competitors={competitors} />
            <CPPreviewTable records={records} />
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