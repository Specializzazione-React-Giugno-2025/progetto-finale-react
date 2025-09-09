import { Link } from 'react-router';
import LazyLoadGameImage from "./LazyLoadGameImage";

export default function CardGame({ game }) {
    const genres = game.genres.map((genre) => genre.name).join(', ');
    const image = game.background_image; // O passa image come props se preferisci

    return (
        <article key={game.id}>
            <LazyLoadGameImage image={image} />
            <strong>{game.name}</strong>
            <small>{genres}</small>
            <p>{game.released}</p>
            <Link to={`/games/${game.slug}/${game.id}`}>
                <button>Visita il gioco</button>
            </Link>
        </article>
    );
}