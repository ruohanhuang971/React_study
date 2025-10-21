import Friend, { type FriendType } from './Friend';

interface FriendListProps {
    friends: FriendType[];
    selectedFriend: FriendType | null;
    onSelection: (f: FriendType) => void;
}

const FriendsList = ({
    friends,
    selectedFriend,
    onSelection,
}: FriendListProps) => {
    return (
        <ul>
            {friends.map((f) => {
                return (
                    <Friend
                        key={f.id}
                        friend={f}
                        selectedFriend={selectedFriend}
                        onSelection={onSelection}
                    />
                );
            })}
        </ul>
    );
};

export default FriendsList;
