import type { UUID } from 'crypto';
import Button from './Button';

interface FriendProp {
    friend: FriendType;
    selectedFriend: FriendType | null;
    onSelection: (f: FriendType) => void;
}

export type FriendType = {
    id: UUID;
    name: string;
    image: string;
    balance: number;
};

const Friend = ({ friend, selectedFriend, onSelection }: FriendProp) => {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">
                    You own {friend.name} {Math.abs(friend.balance)}$
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owns you {Math.abs(friend.balance)}$
                </p>
            )}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? 'Close' : 'Select'}
            </Button>
        </li>
    );
};

export default Friend;
