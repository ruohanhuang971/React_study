import type { ListProp } from './CityList';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

export type CountryType = {
    country: string;
    emoji: string;
};

const CountryList = ({ cities, isLoading }: ListProp) => {
    if (isLoading) return <Spinner />;
    if (!cities.length) {
        return (
            <Message message="Add your first city by clicking on a city on the map" />
        );
    }

    const countries = cities.reduce<CountryType[]>((acc, cur) => {
        if (!acc.map((el) => el.country).includes(cur.country)) {
            return [...acc, { country: cur.country, emoji: cur.emoji }];
        } else {
            return acc;
        }
    }, []);

    return (
        <ul className={styles.cityList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    );
};

export default CountryList;
