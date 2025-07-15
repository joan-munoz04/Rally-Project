const VehicleCard = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 py-2 px-12 w-1/2 text-textGray text-xl border-2 border-[#D9D9D9] rounded-xl">
            <div className="flex flex-col items-center">
                <img src="/Motos.png" alt="Motos" width={73} />
                <p>Motos</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/UTVs.png" alt="UTVs"width={73} />
                <p>UTVs</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/ATVs.png" alt="ATVs" width={73}/>
                <p>ATVs</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/Camionetas.png" alt="Camionetas" width={73}/>
                <p>Camionetas</p>
            </div>
        </div>
    )
}

export default VehicleCard;