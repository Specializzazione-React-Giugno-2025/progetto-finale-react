import { Link } from 'react-router-dom';
import useFetchSolution from '../../hooks/useFetchSolution';

const API_KEY = '99925ff7145e461ba3542861e80e5d27';
const initialUrl = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const GenresDropdown = () => {
  const { data, loading, error } = useFetchSolution(initialUrl);

  return (
    <details className="dropdown">
      <summary>Genres</summary>
      {error && <div>Errore: {error}</div>}
      {loading && <div>Caricamento...</div>}
      {data && (
        <ul>
          {data.results.map((genre) => (
            <li key={genre.id}>
              <Link to={`/games/${genre.slug}`}>{genre.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default GenresDropdown;
