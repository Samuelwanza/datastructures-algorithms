//In this scenario, a user is supposed to count the number of islands in a binary matrix 0f 0s and 1,s such that all adjacent ones, vertically or horizontally
// are in the same island. diagonals are not in the same island.
// [[0,1,0,1,0]
// [0,0,1,1,0]
// [1,0,0,1,0]
// [1,0,1,0,1]
// ]
// The above example has 6 islands
function getNumberOfIslands(binaryMatrix) {
    if (!binaryMatrix || binaryMatrix.length === 0 || binaryMatrix[0].length === 0) {
        return 0; // Empty matrix or invalid input
    }

    const rows = binaryMatrix.length;
    const cols = binaryMatrix[0].length;
    let islands = 0;

    function markIsland(x, y) {
        const q = [];
        q.push([x, y]);

        while (q.length > 0) {
            const [x, y] = q.pop();
            if (binaryMatrix[x][y] === 1) {
                binaryMatrix[x][y] = -1;
                pushIfValid(q, x - 1, y);
                pushIfValid(q, x, y - 1);
                pushIfValid(q, x + 1, y);
                pushIfValid(q, x, y + 1);
            }
        }
    }

    function pushIfValid(q, x, y) {
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
            q.push([x, y]);
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (binaryMatrix[i][j] === 1) {
                markIsland(i, j);
                islands++;
            }
        }
    }

    return islands;
}
