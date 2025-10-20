import type { ItemType } from './Item';

interface StatsProp {
    list: ItemType[];
}

const Stats = ({ list }: StatsProp) => {
    if (!list.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </footer>
        );
    }

    const numItems = list.length;
    const packedItems = list.filter((i) => i.packed).length;
    const percent = Math.round((packedItems / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percent === 100
                    ? `You've got everything! Ready to go ✈️`
                    : `You have ${numItems} items on your list, and you have already
                packed ${packedItems} (${percent}%)`}
            </em>
        </footer>
    );
};

export default Stats;
