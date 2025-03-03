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
import NotFound from "./pages/NotFound";

// Layout
import DefaultLayout from "./layout/DefaultLayout";

function App() {

  //useState per la query
  const [query, setQuery] = useState("");

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

  //funzione per i film
  function fetchMovies() {
    const movieRequest = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=088310a02089b323c7a2210e06730878&language=it-IT&query=${state}`);

    //Array di destinazione
    axios.get(movieRequest)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => console.log(err));
  }

  //useEffect per i film
  useEffect(() => { fetchMovies() }, [query]);

  //useState per i film
  const [movies, setMovies] = useState([]);

  //funzione per le serie
  function fetchSeries() {
    const seriesRequest = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=088310a02089b323c7a2210e06730878&query=dexter&language=it-IT${state}`);

    //Array di destinazione
    axios.get(seriesRequest)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => console.log(err));
  }

  //useEffect per le serie
  useEffect(() => { fetchSeries() }, [query]);

  //useState per le serie
  const [series, setSeries] = useState([]);

  return (
    <GlobalContext.Provider value={{ fetchMovies, fetchSeries, movies, series }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={< HomePage />} />
            <Route path="/ChiSiamo" element={< ChiSiamo />} />
            <Route path="/Contatti" element={< Contatti />} />
            <Route path="/top10" element={<Navigate to="/Top10" />} />
            <Route path="/TopTen">
              <Route index element={< TopTen />} />
            </Route>
            {/* Rotta dell'error 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App
