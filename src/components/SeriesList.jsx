import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import SeriesCard from '../components/SeriesCard';

export default function SeriesList() {

    //destrutturo useContext
    const { series } = useContext(GlobalContext)
    return (
        <div>
            <h1>Risultati per Serie Tv</h1>
            <div>
                {
                    series.map(serie => <SeriesCard key={serie.id} serie={serie} />)
                }
            </div>
        </div>
    )
}