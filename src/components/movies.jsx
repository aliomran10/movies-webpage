import React, { useEffect, useState } from "react";
import MultiActionAreaCard from "./card";
import "../styles/movies.css";

const Movies = () => {
  const [movies, setMovies] = useState({ movies: [] });

  useEffect(() => {
    const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const url = "https://api.themoviedb.org/3";
    const path = "/discover/movie?sort_by=popularity.desc";
    const apiUrl = url + path + apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies({ movies: data.results });
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div className="movies">
      {movies.movies.map((m) => (
        <MultiActionAreaCard key={m.id} {...m}></MultiActionAreaCard>
      ))}
    </div>
  );
};

export default Movies;
