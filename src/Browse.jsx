import React from "react";
import { useLocation } from "react-router-dom";
import RenderGenredAnime from "./RenderGenredAnime";

function Browse({ AnimeData }) {
  const location = useLocation();
  const { category, Quote } = location.state || {};

  const genres = [
    "action",
    "adventure",
    "comedy",
    "supernatural",
    "thriller",
    "drama",
    "fantasy",
    "sci-fi",
    "romance",
    "music",
    "seinen",
    "shonen",
    "shojo",
    "slice of life",
    "sports",
    "superhero",
    "Science fantasy",
    "Horror",
    "Dark fantasy",
    "Martial arts",
    "Music",
    "Mystery",
  ];

  // console.log(category);

  const isGenre = genres.some((genre) =>
    category
      ? genre.toLocaleLowerCase() === category.toLocaleLowerCase()
      : null,
  );

  // console.log(isGenre);

  return (
    <div className="max-w-7xl mx-auto text-white">
      {category && (
        <h2 className="text-center font-semibold mt-12">{category}</h2>
      )}
      {Quote && <p className="text-center text-sm">{Quote}</p>}
      {/* {categorizedAnimes.map((anime) => (
        <div key={anime.id}>
          <h3>{anime.title}</h3>
          <p>{anime.description}</p>
          <p>IMDB Rating: {anime.IMDB_rating}</p>
        </div>
      ))} */}

      {isGenre && <RenderGenredAnime Genre={category} AniData={AnimeData} />}
    </div>
  );
}

export default Browse;
