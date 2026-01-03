import { useEffect, useState } from "react";
import { tmdb } from "./services/tmdb";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import { Sun, Moon, Film, TrendingUp } from "lucide-react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeGenre, setActiveGenre] = useState(null);

  const genres = [
    { id: null, name: "Trending", icon: <TrendingUp size={16} /> },
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
  ];

  const fetchMovies = async (q = "", genreId = null) => {
    try {
      setLoading(true);
      let endpoint = "/trending/movie/week";
      let params = {};

      if (q) {
        endpoint = "/search/movie";
        params = { query: q };
      } else if (genreId) {
        endpoint = "/discover/movie";
        params = { with_genres: genreId };
      }

      const res = await tmdb.get(endpoint, { params });
      setMovies(res.data.results);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        setActiveGenre(null);
        fetchMovies(query);
      } else {
        fetchMovies(null, activeGenre);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [query, activeGenre]);

  return (
    <div className={`app-wrapper ${darkMode ? "dark-theme" : "light-theme"}`}>
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Film className="logo-icon" size={32} />
            <span>MOOVLY</span>
          </div>
          
          <div className="nav-right">
            <SearchBar value={query} onChange={setQuery} />
            <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="category-bar">
          {genres.map((g) => (
            <button
              key={g.id}
              className={`cat-btn ${activeGenre === g.id ? "active" : ""}`}
              onClick={() => {
                setQuery("");
                setActiveGenre(g.id);
              }}
            >
              {g.icon && <span className="icon-gap">{g.icon}</span>}
              {g.name}
            </button>
          ))}
        </div>
      </header>

      <main className="content-area">
        {loading ? (
          <div className="status-box"><Loader /></div>
        ) : movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="status-box"><EmptyState /></div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Moovly - Tugas UAS Front End</p>
      </footer>
    </div>
  );
}

export default App;