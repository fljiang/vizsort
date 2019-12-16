let newGridData = [];
for(let i = 0; i < 25; i++) {
    newGridData.push({
        x: i,
        y: Math.floor(Math.random()*25) + 1,
        color: 0
    });
}

const initialState = {
    gridSize: newGridData.length,
    gridData: JSON.parse(JSON.stringify(newGridData)),
    numGridDataUpdated: 0 // keeps track of number of times the data was changed
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_GRID_SIZE':
        // console.log(`Grid size changed from ${state.gridSize} to ${action.payload}`);
        return Object.assign({}, state, {
          gridSize: action.payload || 25
        })
      case 'CREATE_NEW_GRID':
        // console.log("Data cleared!");
        return Object.assign({}, state, {
          gridData: action.payload || [],
          numGridDataUpdated: Math.round(Math.random()*1000)
        })
      case 'SET_GRID_DATA':
        // console.log('New Grid data received');
        return Object.assign({}, state, {
          gridData: action.payload || [],
          numGridDataUpdated: ++state.numGridDataUpdated
        })
      default:
        return state
    }
  }