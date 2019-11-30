let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}


function render() {
    document.body.textContent = state.count
}


function dispatch(action) {
    state = changeState(state, action)
    render()
}

//Created a setInterval to make it more interesting.
setInterval(() => {
    dispatch({ type: "INCREASE_COUNT" })
}, 100);


// dispatch({type: "INCREASE_COUNT"})
// dispatch({type: "INCREASE_COUNT"})
// dispatch({type: "INCREASE_COUNT"})
// dispatch({type: "INCREASE_COUNT"})
