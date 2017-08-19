// a reducer takes in two things
// 1. the action (info about what happened)
// 2. a copy of current state

function posts (state = [], action) {
    console.log(state, action);
    console.log('The post will change!');
    return state;
}

export default posts;
