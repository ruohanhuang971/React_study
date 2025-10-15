import Item from './Item';

type ItemType = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

type PackingListProps = {
    list: ItemType[];
};

const PackingList = ({ list }: PackingListProps) => {
    return (
        <div className="list">
            <ul>
                {list.map((l, index) => {
                    return <Item key={index} item={l} />;
                })}
            </ul>
        </div>
    );
};

export default PackingList;
