import { useRef } from 'react';
import { useKey } from '../../custom_hooks/useKey';

interface SearchProp {
    query: string;
    setQuery: (s: string) => void;
}

const Search = ({ query, setQuery }: SearchProp) => {
    const inputEl = useRef<HTMLInputElement | null>(null);

    useKey('Enter', () => {
        if (document.activeElement === inputEl.current) return;
        inputEl.current!.focus();
        setQuery('');
    });

    return (
        <div>
            <input
                className="search"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                ref={inputEl}
            />
        </div>
    );
};

export default Search;
