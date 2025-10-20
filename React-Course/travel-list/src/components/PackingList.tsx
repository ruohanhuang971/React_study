import { useState } from 'react';
import Item, { type ItemType } from './Item';

interface PackingListProps {
    list: ItemType[];
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
    onClearList: () => void;
}

const PackingList = ({
    list,
    onDeleteItem,
    onToggleItem,
    onClearList,
}: PackingListProps) => {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems: ItemType[] = [];
    if (sortBy === 'input') sortedItems = list;
    if (sortBy === 'description')
        sortedItems = list
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed')
        sortedItems = list
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((l, index) => {
                    return (
                        <Item
                            key={index}
                            item={l}
                            onDeleteItem={onDeleteItem}
                            onToggleItem={onToggleItem}
                        />
                    );
                })}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
};

export default PackingList;
