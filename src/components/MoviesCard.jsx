import Flag from 'react-world-flags';

export default function MoviesCard({ movie }) {
    return (
        <div className="container card">
            <div className="card">
                <h2>{movie.title}</h2>
                <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h3>Titolo originale: {movie.original_title}</h3>
                <div className='card-flag'>
                    <h3>Lingua originale: </h3>
                    <span>
                        {movie.original_language === "it"
                            ? <Flag width="40px" code="IT" />
                            : movie.original_language === "en"
                                ? <Flag width="40px" code="GB" />
                                : <span>Sconosciuto</span>}
                    </span>
                </div>
                <h4>Voto: {movie.vote_average}</h4>
            </div>
        </div >
    )
}
