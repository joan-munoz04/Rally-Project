const VehicleCard = () => {
    return (
        <div className="grid border-2 border-[#D9D9D9] rounded-xl">
            <div className="flex flex-col items-center">
                <img src="/Motos.png" alt="Motos" />
                <p>Motos</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/UTVs.png" alt="UTVs" />
                <p>UTVs</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/ATVs.png" alt="ATVs" />
                <p>ATVs</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="/Camionetas.png" alt="Camionetas" />
                <p>Camionetas</p>
            </div>
        </div>
    )
}

export default VehicleCard;