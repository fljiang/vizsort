export const changeGridSize = (gridSize) => {
    return {
      type: 'CHANGE_GRID_SIZE',
      payload: gridSize
    }
}

export const createNewGrid = () => {
    return {
        type: 'CREATE_NEW_GRID'
    }
}

export const setGridData = (gridData) => {
    return {
        type: 'SET_GRID_DATA',
        payload: gridData
    }
}