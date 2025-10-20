interface BillProps {
    price: number;
    onSet: (p: number) => void;
}

const Bill = ({ price, onSet }: BillProps) => {
    const handleChange = (p: string) => {
        const newPrice = Number(p);
        if (!newPrice) return;

        onSet(newPrice);
    };

    return (
        <div>
            <span>How much was the bill? </span>
            <input
                type="text"
                value={price}
                placeholder="Bill value"
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default Bill;
