import axios from 'axios'

// make API calls and pass the returned data via dispatch
export const fetchMovies = (data) => async (dispatch) => {
    console.log('inaction')
    const { search } = data
    dispatch({ type: 'FETCHING_MOVIES', fetching: true })
    await axios(`https://api.jikan.moe/v3/search/anime?q=${data.search}&limit=16&page=${data.page}`)
        .then(response => {
            const results = response.data.results
            dispatch({ type: 'STACK_MOVIES', results })
            dispatch({ type: 'MOVIE_SEARCHED', search })
            dispatch({ type: 'FETCHING_MOVIES', fetching: false })
        })
        .catch(e => {
            // handle error
            alert(e.response.data.message)
            dispatch({ type: 'FETCHING_MOVIES', fetching: false })
            return e;
        })
}

export const resetMovies = () => async (dispatch) => {
    dispatch({ type: 'RESET_MOVIES', payload: [] })

}