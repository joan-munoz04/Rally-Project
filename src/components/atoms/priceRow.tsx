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
        ? "text-[#4CACAC]"
        : variant === "categories"
        ? "text-[#767676]"
        : "";
    return (
        <div className={`text-lg flex flex-row border-y-2 border-y-black justify-between ${colorClass} ${className}`}>
            <p>{phase}</p>
            <div className="flex gap-8">
                <p>{value1}</p>
                <p>{value2}</p>
            </div>
        </div>
    )
}

export default PriceRow;