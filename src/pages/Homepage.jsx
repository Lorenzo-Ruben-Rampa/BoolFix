import { useContext } from 'react';
import GlobalContext from "../contexts/GlobalContext";
import MoviesList from "../components/MoviesList";

const Home = () => {

    const { movies } = useContext(GlobalContext)

    return (
        <>
            <div className="container">
                <h2>Risultati ricerca:</h2>
            </div>
            <div className="container">
                < MoviesList />
            </div>
        </>
    )
}

export default Home

