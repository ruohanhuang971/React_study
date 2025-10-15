type ItemType = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

type ItemProp = {
    item: ItemType;
};

const Item = ({ item }: ItemProp) => {
    return (
        <li>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
                <button>❌</button>
            </span>
        </li>
    );
};

export default Item;
