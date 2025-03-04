import Flag from 'react-world-flags';

export default function MoviesCard({ movie }) {
    // Trasformiamo il voto da una scala 1-10 a una scala 1-5
    const voteToStars = Math.round(movie.vote_average / 2);

    // Creiamo un array di stelle piene e vuote
    const stars = Array.from({ length: 5 }, (_, index) => index < voteToStars);

    // Funzione per gestire l'errore dell'immagine
    const handleImageError = (e) => {
        e.target.src = "../public/imgs/error.jpg"; // Cambia l'immagine di errore se quella originale non è disponibile
    };

    return (
        <div className="card">
            <h2>{movie.title}</h2>
            <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onError={handleImageError} />
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
            {/* Voto in stelle */}
            <div className="card-flag">
                <h4>Voto:                    </h4>
                {stars.map((star, index) => (
                    <i
                        key={index}
                        className={`fa-${star ? 'solid' : 'regular'} fa-star gold`}
                    />
                ))}
            </div>
            <h4>Trama: </h4>
            <p className="white">{movie.overview}</p>
        </div>
    )
}
