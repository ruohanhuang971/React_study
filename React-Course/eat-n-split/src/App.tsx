import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
import type { FriendType } from './components/Friend';
import { initialFriends } from './assets/initialFriends';

function App() {
    const [friends, setFriends] = useState<FriendType[]>(initialFriends);
    const [showAddFri, setShowAddFri] = useState<boolean>(false);
    const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(
        null
    );

    const handleShowAddFri = () => {
        setShowAddFri((show) => !show);
    };

    const handleAddFri = (friend: FriendType) => {
        setFriends((friends) => [...friends, friend]);
        setShowAddFri(false);
    };

    const handleSelection = (friend: FriendType) => {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend
        );
        setShowAddFri(false);
    };

    const handleSplitBill = (value: number) => {
        setFriends((friends) =>
            friends.map((f) =>
                f.id === selectedFriend?.id
                    ? { ...f, balance: f.balance + value }
                    : f
            )
        );

        setSelectedFriend(null);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFri && <FormAddFriend onAddFri={handleAddFri} />}

                <Button onClick={handleShowAddFri}>
                    {showAddFri ? 'Close' : 'Add friend'}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                    key={selectedFriend.id}
                />
            )}
        </div>
    );
}

export default App;
