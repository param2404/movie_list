import React, { useState } from 'react';
import { connect } from 'react-redux'
import './../App.css';
import { fetchMovies } from './../store/actions/movieAction'


const Movie = React.memo(({ movies, fetchMovies }) => {
    const [page, setPage] = useState(1)
    const loadMore = () => {
        console.log('load more')
        setPage(page + 1)
        fetchMovies({ search: movies.search, page: page + 1 })
    }

   


    return (
        <div className="container">
            <div className="row">
                {movies.movies.length > 0 && movies.movies.map((image, index) => {
                    const { title, image_url } = image
                    return (
                        <div key={index} className="card">
                            <div className="card-body">
                                <img
                                    alt={title}
                                    data-src={image_url}
                                    className="card-img-top"
                                    src={image_url}
                                />
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-center text-capitalize text-primary">{title}</p>
                            </div>
                        </div>

                    );
                })}
            </div>
            {movies.fetching ? <h3>Loading..Please Wait...</h3> : movies.movies.length > 0 ? <button onClick={() => loadMore()}>Load More</button> : <h3>No Data</h3>}
          </div>)
})

const mapsStateToProps = ({ movies }) => {
    return { movies: movies }
}

export default connect(mapsStateToProps, { fetchMovies })(Movie);
