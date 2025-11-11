import styles from './CountryItem.module.css';
import type { CountryType } from './CountryList';

type CountryItemProp = {
    country: CountryType;
};

function CountryItem({ country }: CountryItemProp) {
    return (
        <li className={styles.countryItem}>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;
