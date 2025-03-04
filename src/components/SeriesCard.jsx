export default function SeriesCard() {
    return (
        <div className="container card">
            <div className="card">
                <h3>{serie.title}</h3>
                <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
                <h4>Titolo originale: {serie.original_title}</h4>
                <div>
                    <p>Lingua originale: {serie.original_language}</p>
                </div>
                <h4>Voto: {serie.vote_average}</h4>
            </div>
        </div>
    )
}
