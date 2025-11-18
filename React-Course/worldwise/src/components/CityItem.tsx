import styles from './CityItem.module.css';
import type { CityType } from '../App';
import { Link } from 'react-router-dom';

export type CityItemProp = {
    item: CityType;
};

const formatDate = (date: string | null): string => {
    if (!date) return '';

    return new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
};

const CityItem = ({ item }: CityItemProp) => {
    const { cityName, emoji, date, id, position } = item;

    return (
        <li>
            <Link
                className={styles.cityItem}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.data}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
};

export default CityItem;
