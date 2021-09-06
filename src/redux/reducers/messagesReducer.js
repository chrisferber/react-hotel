// stores all data from event table in database
const messagesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.payload;
        default:
            return state;
    }
}

export default messagesReducer;