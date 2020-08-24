const intialState = {
    movies: [],
    fetching: false,
    search:''
}
export const movieReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'STACK_MOVIES':
            return { ...state, movies: state.movies.concat(action.results) }
        case 'FETCHING_MOVIES':
            return { ...state, fetching: action.fetching }
        case 'RESET_MOVIES':
            return { ...state, movies: [] }
        case 'MOVIE_SEARCHED':
            return {...state,search:action.search}
        default:
            return state;
    }
}