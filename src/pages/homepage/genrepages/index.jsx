import { useParams } from "react-router";
import CardGame from '../../components/CardGame';
import useFetchSolution from '../../hooks/useFetchSolution';

export default function GenrePage() {
    const { genre } = useParams();

    const initialUrl = `https://api.rawg.io/api/games?key=9269195f491e44539d7a2d10ce87ab15&genres=${genre}&page=1`;
    const { data, loading, error } = useFetchSolution(initialUrl);

    return (
        <>
            <h2>Welcome to {genre} page</h2>
            {loading && <div>Loading...</div>}
            <div className="grid-games-list">
                {error && <article>{error}</article>}
                {data &&
                    data.results.map((game) => <CardGame key={game.id} game={game} />)
                }
            </div>
        </>
    );
}