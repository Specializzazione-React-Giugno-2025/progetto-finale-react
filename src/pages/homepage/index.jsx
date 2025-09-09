import React from "react";
import CardGame from "../../assets/components/CardGame";
import useFetchSolution from "../../hooks/useFetchSolution";

const API_KEY = "99925ff7145e461ba3542861e80e5d27";
const initialUrl = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-01-01,2024-12-31&page=1`;

export default function HomePage() {
  const { data, loading, error } = useFetchSolution(initialUrl);

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <div>Loading...</div>}
      <div className="grid-games-list">
        {error && <article>{error}</article>}
        {data && data.results.map(game => (
          <CardGame key={game.id} game={game}/>
        ))}
      </div>
    </div>
  );
}