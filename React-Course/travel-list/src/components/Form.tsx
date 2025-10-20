import { useState } from 'react';
import type { ItemType } from './Item';

interface FormProps {
    onAddItems: (item: ItemType) => void;
}

const Form = ({ onAddItems }: FormProps) => {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent default behavior: don't reload page

        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };
        onAddItems(newItem);

        // reset form
        setQuantity(1);
        setDescription('');
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? 🤔</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)} // change based on input
            />
            <button>Add</button>
        </form>
    );
};

export default Form;
