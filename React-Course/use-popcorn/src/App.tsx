import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/SavedInfo/Main';
import { useState } from 'react';
import Logo from './components/NavBar/Logo';
import Search from './components/NavBar/Search';
import NumResults from './components/NavBar/NumResults';
import Box from './components/Main/MovieList/ListBox';
import MovieList from './components/Main/MovieList/MovieList';
import WatchedSummary from './components/Main/SavedInfo/WatchedSummary';
import WatchedMovieList from './components/Main/SavedInfo/WatchedMovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/Main/MovieDetails';
import type { MovieSummary } from './components/Main/SavedInfo/WatchedBox';
import { useMovies } from './custom_hooks/useMovies';
import { useLocalStorageState } from './custom_hooks/useLocalStorageState';

export default function App() {
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    // const [watched, setWatched] = useState<MovieSummary[]>(() => {
    //     const storedValue = localStorage.getItem('watched');
    //     return JSON.parse(storedValue!);
    // });
    // custom hooks
    const [watched, setWatched] = useLocalStorageState([], 'watched');
    const { movies, isLoading, error } = useMovies(query);

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
