interface ResetProps {
    setPrice: (i: number) => void;
    SetSatisfaction: (i: number) => void;
    SetFriendSatisfaction: (i: number) => void;
}

const Reset = ({
    setPrice,
    SetSatisfaction,
    SetFriendSatisfaction,
}: ResetProps) => {
    const handleClick = () => {
        setPrice(0);
        SetSatisfaction(0);
        SetFriendSatisfaction(0);
    };

    return (
        <div>
            <button onClick={handleClick}>Reset</button>
        </div>
    );
};

export default Reset;
