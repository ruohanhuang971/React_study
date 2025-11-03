import { useState } from 'react';
import './App.css';

function useGeolocation(): {
    isLoading: boolean;
    position: { lat: number; lng: number } | null;
    error: string | null;
    getPosition: () => void;
} {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState<{
        lat: number;
        lng: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    function getPosition() {
        if (!navigator.geolocation)
            return setError('Your browser does not support geolocation');

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setIsLoading(false);
            }
        );
    }

    return { isLoading, position, error, getPosition };
}

function App() {
    const { isLoading, position, error, getPosition } = useGeolocation();
    const [countClicks, setCountClicks] = useState(0);

    const handleClick = () => {
        setCountClicks((click) => click + 1);
        getPosition();
    };

    const lat = position?.lat;
    const lng = position?.lng;

    return (
        <div>
            <button onClick={handleClick} disabled={isLoading}>
                Get my position
            </button>
            {isLoading && <p>Loading position...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && lat && lng && (
                <p>
                    Your GPS position:{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                    >
                        {lat}, {lng}
                    </a>
                </p>
            )}
            <p>You requested position {countClicks} times</p>
        </div>
    );
}

export default App;
