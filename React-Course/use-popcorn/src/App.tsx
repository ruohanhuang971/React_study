import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/SavedInfo/Main';
import { useEffect, useState } from 'react';
import Logo from './components/NavBar/Logo';
import Search from './components/NavBar/Search';
import NumResults from './components/NavBar/NumResults';
import type { MovieType } from './components/Main/MovieList/Movie';
import Box from './components/Main/MovieList/ListBox';
import MovieList from './components/Main/MovieList/MovieList';
import WatchedSummary from './components/Main/SavedInfo/WatchedSummary';
import WatchedMovieList from './components/Main/SavedInfo/WatchedMovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/Main/MovieDetails';
import type { MovieSummary } from './components/Main/SavedInfo/WatchedBox';

export default function App() {
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [watched, setWatched] = useState<MovieSummary[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const handleSelectMovie = (id: string) => {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    };

    const handleCloseMovie = () => {
        setSelectedId(null);
    };

    const handleAddWatchedMovie = (movie: MovieSummary) => {
        setWatched((watched) => [...watched, movie]);
    };

    const handleDeleteWatchedMovie = (id: string) => {
        setWatched((watched) => watched.filter((m) => m.imdbID !== id));
    };

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

        handleCloseMovie();
        fetchMovies();

        return function () {
            controller.abort();
        };
    }, [query]);

    return (
        <>
            <NavBar>
                <Logo />
                <Search query={query} setQuery={setQuery} />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <Box>
                    {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectMovie}
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                </Box>
                <Box>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            watched={watched}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatchedMovie}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMovieList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatchedMovie}
                            />
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}
