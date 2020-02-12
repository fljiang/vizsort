export const changeGridSize = (gridSize) => {
    return {
      type: 'CHANGE_GRID_SIZE',
      payload: gridSize
    }
}

export const setExpressionGraph = (gridData) => {
    return {
        type: 'SET_EXPRESSION_GRAPH',
        payload: gridData
    }
}

export const createNewGrid = (gridData) => {
    return {
        type: 'CREATE_NEW_GRID',
        payload: gridData
    }
}

export const setGridData = (gridData) => {
    return {
        type: 'SET_GRID_DATA',
        payload: gridData
    }
} 