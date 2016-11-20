const makeMatrix = (gridSize)=>{
    const matrix = []
    for(let i = 0; i <= gridSize; i++){
      matrix.push([])
    }
    const matrixSet = []
    matrix.forEach(()=>{
      matrixSet.push(matrix)
    })

    return matrixSet
}

let paths = 0

const findPaths = (matrix, row, col)=>{
    let right = true
    let left = true

    if(matrix[row+1][col]) {
      right = false
      findPaths(matrix, row+1, col)
    }
    if(matrix[row][col+1]){
      left = false
      findPaths(matrix, row, col+1)
    }
    if(left && right) count++
}

const grid = makeMatrix(2)
findPaths(grid, 0, 0)
console.log(paths)
