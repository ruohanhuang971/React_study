import { useEffect, useRef, useState } from 'react';
import StarRating from '../StarRating';
import Loader from '../Loader';
import type { MovieSummary } from './SavedInfo/WatchedBox';
import { useKey } from '../../custom_hooks/useKey';

interface MovieDetailsProp {
    selectedId: string;
    watched: MovieSummary[];
    onCloseMovie: () => void;
    onAddWatched: (m: MovieSummary) => void;
}

export type MovieDetailsType = {
    Title: string;
    Year: string;
    Poster: string;
    Runtime: string;
    imdbRating: string;
    Plot: string;
    Released: string;
    Actors: string;
    Director: string;
    Genre: string;
};

const MovieDetails = ({
    selectedId,
    watched,
    onCloseMovie,
    onAddWatched,
}: MovieDetailsProp) => {
    const [movie, setMovie] = useState<MovieDetailsType | null>(null);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [userRating, setUserRating] = useState(0);

    const countRef = useRef<number>(0);

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserSetting = watched.find(
        (movie) => movie.imdbID
    )?.userRating;

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie ?? {};

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            title: title!,
            year: year!,
            poster: poster!,
            imdbRating: Number(imdbRating),
            userRating,
            runtime: Number(runtime!.split(' ').at(0)),
            countRatingDecisions: countRef.current,
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    };

    useEffect(() => {
        if (userRating) countRef.current = countRef.current + 1;
    }, [userRating]);

    useEffect(() => {
        setIsLoading(true);
        const getMovieDetails = async () => {
            const res = await fetch(
                `http://www.omdbapi.com/?apikey=97bcd30b&i=${selectedId}`
            );

            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        };
        getMovieDetails();
    }, [selectedId]);

    useEffect(() => {
        if (!title) return;
        document.title = `Movie | ${title}`;

        // clean up function
        return function () {
            document.title = 'usePopcorn';
        };
    }, [title]);

    useKey('Escape', onCloseMovie);

    return (
        <div className="details">
            {isloading ? (
                <Loader />
            ) : (
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie} movie`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {imdbRating} IMDB rating
                            </p>
                        </div>
                    </header>

                    <section>
                        <div className="rating">
                            {!isWatched ? (
                                <>
                                    <StarRating
                                        maxStar={10}
                                        size={24}
                                        onSetRating={setUserRating}
                                    />

                                    {userRating > 0 && (
                                        <button
                                            className="btn-add"
                                            onClick={handleAdd}
                                        >
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated this movie {watchedUserSetting}{' '}
                                    <span>⭐</span>
                                </p>
                            )}
                        </div>

                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
        </div>
    );
};

export default MovieDetails;
