const initialState = {
    gridSize: 12,
    gridData: [
      {x: 0, y: 2},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 6},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 8},
      {x: 7, y: 3},
      {x: 8, y: 0},
      {x: 9, y: 9}
    ],
    numGridDataUpdated: 0, // keeps track of number of times the data was changed
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_GRID_SIZE':
        // console.log(`Grid size changed from ${state.gridSize} to ${action.payload}`);
        return Object.assign({}, state, {
          gridSize: action.payload || 12
        })
      case 'CREATE_NEW_GRID':
        // console.log("Data cleared!");
        return Object.assign({}, state, {
          gridData: []
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