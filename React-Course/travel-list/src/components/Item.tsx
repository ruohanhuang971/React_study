export type ItemType = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

export type ItemProp = {
    item: ItemType;
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
};

const Item = ({ item, onDeleteItem, onToggleItem }: ItemProp) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
                <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </span>
        </li>
    );
};

export default Item;
