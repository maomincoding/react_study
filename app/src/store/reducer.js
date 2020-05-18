let defaultState = {
  name:'maomin',
  list:[]
}

export default (state=defaultState,action) =>{
  if(action.type === 'click') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(1);
    console.log(newState.list);
    return newState
  }
  return state
}