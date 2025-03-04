import { useContext } from 'react';
import GlobalContext from "../contexts/GlobalContext";
import MoviesList from "../components/MoviesList";

const Home = () => {

    const { movies } = useContext(GlobalContext)

    return (
        <>
            {/* <div className="container">
                <h1>Homepage</h1>
            </div> */}
            <div className="container">
                < MoviesList />
            </div>
        </>
    )
}

export default Home

