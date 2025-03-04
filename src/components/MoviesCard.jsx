export default function MoviesCard({ movie }) {
    return (
        <div className="container card">
            <div className="card">
                <h3>{movie.title}</h3>
                <img className="img-card" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <h4>Titolo originale: {movie.original_title}</h4>
                <div>
                    <p>Lingua originale: {movie.original_language}</p>
                </div>
                <h4>Voto: {movie.vote_average}</h4>
            </div>
        </div>
    )
}
