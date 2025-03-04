import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import MoviesCard from './MoviesCard';

export default function MovieList() {

    //destrutturo useContext
    const { movies } = useContext(GlobalContext)
    return (
        <div className='results-container'>
            <div className='container'>
                {
                    movies.map(movie => <MoviesCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    )
}