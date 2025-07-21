interface PaymentRowProps {
    paymentName: string;
    accNumber: string;
}

const PaymentRow = ({paymentName, accNumber}: PaymentRowProps) => {
    return (
        <div className="flex justify-between mx-20 items-center">
            <div className="text-3xl font-semibold text-[#1E1E1E] flex items-center gap-4">
                <img src={`/${paymentName}.png`} alt={paymentName} />
                <p>{paymentName}</p>
            </div>
            <p className="text-textGray text-xl">{accNumber}</p>
        </div>
    )
}

export default PaymentRow;