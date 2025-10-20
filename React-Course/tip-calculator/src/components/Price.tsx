interface PriceProps {
    price: number;
    satisfaction: number;
}

const Price = ({ price, satisfaction }: PriceProps) => {
    const tip = Math.floor((price * satisfaction) / 2 / 100);

    return (
        <div>
            <h1>
                {price == 0
                    ? ''
                    : `You pay $${price + tip} ($${price} + $${tip} tip)`}
            </h1>
        </div>
    );
};

export default Price;
