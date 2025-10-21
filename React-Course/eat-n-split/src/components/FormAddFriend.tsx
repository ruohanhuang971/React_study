import { useState } from 'react';
import Button from './Button';
import type { FriendType } from './Friend';

interface FormAddFriendProps {
    onAddFri: (friend: FriendType) => void;
}

const FormAddFriend = ({ onAddFri }: FormAddFriendProps) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend: FriendType = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFri(newFriend);

        setName('');
        setImage('https://i.pravatar.cc/48');
    };

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑 Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>📷Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
};

export default FormAddFriend;
