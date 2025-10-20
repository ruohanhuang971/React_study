import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';
import type { ItemType } from './components/Item';

function App() {
    const [items, setItems] = useState<ItemType[]>([]);

    const handleDeleteItem = (id: number) => {
        setItems((items) => items.filter((i) => i.id !== id));
    };

    const handleAddItems = (item: ItemType) => {
        setItems((items) => [...items, item]);
    };

    const handleToggleItem = (id: number) => {
        setItems((items) =>
            items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
        );
    };

    const handleClearList = () => {
        const confirmed = window.confirm(
            `Are you sure you want to delete all items?`
        );
        if (confirmed) setItems([]);
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                list={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats list={items} />
        </div>
    );
}

export default App;
