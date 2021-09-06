// stores all data from event table in database
const hotelsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_HOTEL':
            return action.payload;
        default:
            return state;
    }
}

export default hotelsReducer;