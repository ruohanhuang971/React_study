interface SearchProp {
    query: string;
    setQuery: (s: string) => void;
}

const Search = ({ query, setQuery }: SearchProp) => {
    return (
        <div>
            <input
                className="search"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default Search;
