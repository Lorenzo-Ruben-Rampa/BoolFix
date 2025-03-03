import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import SeriesCard from '../components/MovieCard';

export default function MovieList() {

    //destrutturo useContext
    const { movies } = useContext(GlobalContext)
    return (
        <div>
            <h1>Risultati per Film</h1>
            <div>
                {
                    series.map(movie => <MoviesCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    )
}