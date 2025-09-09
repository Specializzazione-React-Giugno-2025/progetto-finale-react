import { useParams } from "react-router-dom";
import useFetchSolution from "../../hooks/useFetchSolution";

export default function GamePage() {
    const { id } = useParams();

    const initialUrl = `https://api.rawg.io/api/games/${id}?key=9269195f491e44539d7a2d10ce87ab15`;
    const { data, loading, error } = useFetchSolution(initialUrl);

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <div className="style-gamepage">
                <div className="style-game-info">
                    <p>{data && data.released}</p>
                    <h1>{data && data.name}</h1>
                    <p>Rating: {data && data.rating}</p>
                    <p>About:</p>
                    <p>{data && data.description_raw}</p>
                </div>
                <div className="style-game-image">
                    <img src={data && data.background_image} alt="" />
                </div>
            </div>
        </>
    );
}