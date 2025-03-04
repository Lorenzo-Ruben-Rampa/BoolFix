import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Elementi gestione rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/Homepage";
import GlobalContext from "./contexts/GlobalContext";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import TopTen from "./pages/TopTen";
import NotFoundPage from "./pages/NotFoundPage";

// Layout
import DefaultLayout from "./layout/DefaultLayout";

function App() {

  //useState per la query
  const [query, setQuery] = useState("");
  //useState per i film
  const [movies, setMovies] = useState([]);
  //useState per le serie
  const [series, setSeries] = useState([]);
  //useState per gestire errori
  const [error, setError] = useState(null);

  // funzione per ottenere sia i film che le serie
  function fetchMoviesAndSeries() {
    // reset errore
    setError(null);
    // richiesta per i film
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=088310a02089b323c7a2210e06730878&language=it-IT&query=${query}`)
      .then(movieRequest => {
        // risultati film
        setMovies(movieRequest.data.results);

        // richiesta per le serie
        return axios.get(`https://api.themoviedb.org/3/search/tv?api_key=088310a02089b323c7a2210e06730878&language=it-IT&query=${query}`)
      })
      .then(seriesRequest => {
        setSeries(seriesRequest.data.results);
      })
      .catch(err => {
        setError("Il titolo cercato non esiste");
        console.log(err);
      });
  }


  // useEffect per chiamare la funzione quando cambia la query
  useEffect(() => {
    if (query) {
      fetchMoviesAndSeries();
    }
  }, [query]);

  const motto = "La piattaforma ideale per guardare i tuoi film e serie preferiti in compagnia con un solo account. Perché la felicità è reale solo quand'è condivisa.";

  return (
    <GlobalContext.Provider value={{ movies, series, query, setQuery, fetchMoviesAndSeries }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout mottoPhrase={motto} />}>
            <Route index element={< HomePage />} />
            <Route path="/ChiSiamo" element={< ChiSiamo />} />
            <Route path="/Contatti" element={< Contatti />} />
            <Route path="/top10" element={<Navigate to="/Top10" />} />
            <Route path="/TopTen">
              <Route index element={< TopTen />} />
            </Route>
            {/* Rotta dell'error 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App


// const initialMovies = {
//   adult: Boolean,
//   backdrop_path: "",
//   genre_ids: Number,
//   id: Number,
//   original_language: "",
//   original_title: "",
//   overview: [],
//   popularity: Number,
//   poster_path: "",
//   release_date: Date,
//   title: "",
//   video: Boolean,
//   vote_average: Number,
//   vote_count: Number
// };

// const [movies, setMovies] = useState(initialMovies);