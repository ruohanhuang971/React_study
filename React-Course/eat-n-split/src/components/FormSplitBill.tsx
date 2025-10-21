import { useState } from 'react';
import Button from './Button';
import type { FriendType } from './Friend';

interface FormSplitBillProp {
    selectedFriend: FriendType;
    onSplitBill: (p: number) => void;
}

const FormSplitBill = ({ selectedFriend, onSplitBill }: FormSplitBillProp) => {
    const [bill, setBill] = useState<number>(0);
    const [paidByUser, setPaidByUser] = useState<number>(0);
    const paidByFriend = bill && paidByUser ? bill - paidByUser : 0;
    const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriend! : -paidByUser);
    };

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💰 Bill value</label>
            <input
                type="text"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>💸 Your expenses</label>
            <input
                type="text"
                value={paidByUser}
                onChange={(e) =>
                    setPaidByUser(
                        bill && Number(e.target.value) > bill
                            ? paidByUser
                            : Number(e.target.value)
                    )
                }
            />

            <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend} />

            <label>💳 Who is paying the bill</label>
            <select
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}
            >
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
};

export default FormSplitBill;
