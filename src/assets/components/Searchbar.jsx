import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [arianInvalid, setArianInvalid] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (typeof search === 'string' && search.trim().length !== 0) {
            navigate(`/search?query=${search}`);
            setSearch("");
        } else {
            setArianInvalid(true);
        }
    };

    return (
        <form onSubmit={handleSearch}>
          <fieldset role="group">
            <input type="text"
            name="search"
            placeholder={arianInvalid ? "Devi cercare qualcosa" : "Search a game"}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            aria-invalid={arianInvalid}
            />
            <input type="submit" value="Go" />
          </fieldset>
          </form>
    );
}