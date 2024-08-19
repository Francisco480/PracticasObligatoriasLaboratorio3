const MoviesTitle = ({ watchList }) => {
    const filteredMovies = watchList
        .filter(movie => movie.Director === 'Christopher Nolan' && parseFloat(movie.imdbRating) > 8.0);

    return (
        <div>
            <h2>Christopher Nolan Movies with IMDb Rating higher than 8.0</h2>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.imdbID}>{movie.Title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesTitle;