import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import SeriesCard from '../components/SeriesCard';

export default function SeriesList() {

    //destrutturo useContext
    const { series } = useContext(GlobalContext)
    return (
        <div className="carousel">
            {
                series.map(serie => <SeriesCard key={serie.id} serie={serie} />)
            }
        </div>
    )
}