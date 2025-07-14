interface PaymentRowProps {
    paymentName: string;
    accNumber: string;
}

const PaymentRow = ({paymentName, accNumber}: PaymentRowProps) => {
    return (
        <div className="flex justify-between">
            <div className="text-xl text-[#1E1E1E] flex gap-2">
                <img src={`/${paymentName}.png`} alt={paymentName} className="w-24"/>
                <p>{paymentName}</p>
            </div>
            <p className="text-[#767676] text-lg">{accNumber}</p>
        </div>
    )
}

export default PaymentRow;