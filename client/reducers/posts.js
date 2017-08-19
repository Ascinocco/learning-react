// a reducer takes in two things
// 1. the action (info about what happened)
// 2. a copy of current state

// the code here gets a little functional haha
function posts (state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES' :
            console.log('Incrementing likes!!!');
            const i = action.index;
            return [
                ...state.slice(0, i), // everything up until before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + i), // after the one we are updating
            ]
        default:
            return state;
    }
    return state;
}

export default posts;
