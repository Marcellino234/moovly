const MovieCard = ({ movie }) => {
  return (
    <div
      className="movie-card"
      onClick={() =>
        window.open(
          `https://www.themoviedb.org/movie/${movie.id}`,
          "_blank"
        )
      }
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-meta">
          ⭐ {movie.vote_average.toFixed(1)} •{" "}
          {movie.release_date?.slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
