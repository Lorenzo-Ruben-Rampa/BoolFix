import Flag from 'react-world-flags';

export default function SeriesCard() {
    // Trasformiamo il voto da una scala 1-10 a una scala 1-5
    const voteToStars = Math.round(serie.vote_average / 2);

    // Creiamo un array di stelle piene e vuote
    const stars = Array.from({ length: 5 }, (_, index) => index < voteToStars);

    // Funzione per gestire l'errore dell'immagine
    const handleImageError = (e) => {
        e.target.src = "../public/imgs/error.jpg"; // Cambia l'immagine di errore se quella originale non è disponibile
    };

    return (

        <div className="card">
            <h2>{serie.title}</h2>
            <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} onError={handleImageError} />
            <h4>Titolo originale: {serie.original_title}</h4>
            <div className='card-flag'>
                <h3>Lingua originale: </h3>
                <span>
                    {serie.original_language === "it"
                        ? <Flag width="40px" code="IT" />
                        : serie.original_language === "en"
                            ? <Flag width="40px" code="GB" />
                            : <span>Sconosciuto</span>}
                </span>
            </div>
            {/* Voto in stelle */}
            <div className="card-flag">
                <h4>Voto:</h4>
                {stars.map((star, index) => (
                    <i
                        key={index}
                        className={`fa-${star ? 'solid' : 'regular'} fa-star gold`}
                    />
                ))}
            </div>
            <p>Trama: {serie.overview}</p>
        </div>
    )
}