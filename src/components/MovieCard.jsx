export default function MoviesCard {
    return (
        <div className="card-container">
            <div className="card">
                <h3>{movie.name}</h3>
                <h4>{movie.original_name}</h4>
                <span>{movie.original_language}</span>
                <h4>{movie.vote_average}</h4>
            </div>
        </div>
    )
}
