import PropTypes from 'prop-types'

function ListOfMovies ({ movies }) {
    return (
        <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title}/>
            </li>
          ))
        }
      </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>Not found</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
    hasMovies ? (
        <ListOfMovies movies={movies} />
      ) : (
        <NoMoviesResults/>
      )
    )
}

ListOfMovies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imdbID: PropTypes.string,
            Title: PropTypes.string,
            Year: PropTypes.string,
            Poster: PropTypes.string
        })
    )
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            imdbID: PropTypes.string,
            Title: PropTypes.string,
            Year: PropTypes.string,
            Poster: PropTypes.string
        })
    )
}

