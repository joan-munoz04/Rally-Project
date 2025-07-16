import ControlPointsTable from "./controlPointsTable";

const CPPreviewTable = () => {
    const data = [
        {
        place: "1º",
        countryCode: "es",
        name: "Hernando",
        team: "Yamaha",
        lastTime: "00:22:06",
        },
        {
        place: "2º",
        countryCode: "it",
        name: "Valentina",
        team: "Ferrari",
        lastTime: "00:23:03",
        },
        {
        place: "3º",
        countryCode: "se",
        name: "David",
        team: "Toyota",
        lastTime: "00:25:05",
        },
        {
        place: "4º",
        countryCode: "--",
        name: "--------",
        team: "------",
        lastTime: "--------",
        }
    ];
    return (
        <div className="p-8 flex flex-col gap-4 border-2 border-[#D9D9D9] rounded-xl mx-24">
            <h2 className="underline text-xl">Vista Previa Puesto de Control Seleccionado</h2>
            <div className="px-24">
                <ControlPointsTable data={data}></ControlPointsTable>
            </div>
        </div>
    )
}

export default CPPreviewTable;