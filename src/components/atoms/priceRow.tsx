interface PriceRowProps {
    value1: string;
    value2: string;
    phase?: string;
    variant: string;
    className?: string;
}

const PriceRow = ({ value1, value2, phase, variant, className }: PriceRowProps) => {
    const colorClass =
        variant === "regular"
        ? "text-[#4C4C4C] gap-8"
        : variant === "categories"
        ? "text-[#767676] gap-8"
        : "";
    return (
        <div className={`text-xl p-2 text-textGray flex flex-row border-y-1 border-y-[#0B0B0B]/40 mx-20 justify-between ${className}`}>
            <p>{phase}</p>
            <div className={`flex justify-between pr-4 ${colorClass}`}>
                <p>{value1}</p>
                <p>{value2}</p>
            </div>
        </div>
    )
}

export default PriceRow;