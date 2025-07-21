const RequiredApps = () => {
    return (
        <div className="flex flex-col text-[#1E1E1E] gap-4 border-2 border-[#D9D9D9] rounded-xl p-4">
            <h1 className="text-3xl font-bold">Apps Requeridas</h1>
            <div className="flex text-2xl text-center text flex-row justify-evenly">
                <div className="flex flex-col gap-4 items-center">
                    <p>Terrapirata</p>
                    <a href="https://terrapirata.com" target="_#"><img src="/Terrapirata.png" alt="Terrapirata" width={85} className="transition-transform duration-300 ease-in-out hover:scale-120"/></a>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p>Wikiloc</p>
                    <a href="https://Wikiloc.com" target="_#"><img src="/Wikiloc.png" alt="Wikiloc" width={80} className="transition-transform duration-300 ease-in-out hover:scale-120"/></a>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p>Sportity</p>
                    <a href="https://Sportity.com" target="_#"><img src="/Sportity.png" alt="Sportity" width={80} className="transition-transform duration-300 ease-in-out hover:scale-120"/></a>
                </div>
            </div>
        </div>
    )
}

export default RequiredApps;