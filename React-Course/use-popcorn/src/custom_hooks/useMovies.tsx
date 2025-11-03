import { useEffect, useState } from 'react';
import type { MovieType } from '../components/Main/MovieList/Movie';

// custom hook
export const useMovies = (query: string) => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    // pass function to useEffect
    useEffect(() => {
        const controller = new AbortController();

        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                setError('');

                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=97bcd30b&s=${query}`,
                    { signal: controller.signal }
                );

                if (!res.ok)
                    throw new Error(
                        'Something went wrong with fetching movies'
                    );
                const data = await res.json();

                if (data.Response === 'False')
                    throw new Error('Movie not found');
                setMovies(data.Search);
            } catch (error) {
                if ((error as Error).name !== 'AbortError') {
                    console.log(error);
                    setError((error as Error).message);
                }
            } finally {
                setIsLoading(false);
                setError('');
            }
        };

        if (query.length < 3) {
            setMovies([]);
            setError('');
            return;
        }

        fetchMovies();

        return function () {
            controller.abort();
        };
    }, [query]);

    return { movies, isLoading, error };
};
