// set initial state
let state = {count: 0}

// reducer function applies actions to state and returns a NEW object. Initial state stays the same
function changeState(state, action){
  switch (action.type) {
    // actions
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// dispatch function persists changes to state
function dispatch(action) {
  state = changeState(state, action);
  render()
}

function render(){
  document.body.textContent = state.count
}

render()
