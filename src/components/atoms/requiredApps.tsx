const RequiredApps = () => {
    return (
        <div className="border-2 border-[#D9D9D9] rounded-xl">
            <h1 className="text-3xl text-[#1E1E1E] ">Apps Requeridas</h1>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col gap-2">
                    <p>Terrapirata</p>
                    <img src="/Terrapirata.png" alt="Terrapirata" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Wikiloc</p>
                    <img src="/Wikiloc.png" alt="Wikiloc" />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Sportity</p>
                    <img src="/Sportity.png" alt="Sportity" />
                </div>
            </div>
        </div>
    )
}

export default RequiredApps;