import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { MovieSummary } from '../components/Main/SavedInfo/WatchedBox';

export const useLocalStorageState = (
    initialState: MovieSummary[],
    key: string
): [MovieSummary[], Dispatch<SetStateAction<MovieSummary[]>>] => {
    const [value, setValue] = useState<MovieSummary[]>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue!) : initialState;
    });

    // add watched movie to local storage to persist
    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
