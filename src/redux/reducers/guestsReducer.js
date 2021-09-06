// stores all data from event table in database
const guestsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GUEST':
            return action.payload;
        default:
            return state;
    }
}

export default guestsReducer;