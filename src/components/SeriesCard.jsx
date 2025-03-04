import Flag from 'react-world-flags';

export default function SeriesCard() {
    return (
        <div className="container card">
            <div className="card">
                <h2>{serie.title}</h2>
                <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
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
                <h4>Voto: {serie.vote_average}</h4>
            </div>
        </div>
    )
}