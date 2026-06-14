let a = [1, 2, 3, 4, 5];

let grid = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

]

//Print all the elements
// i for row and j for column

for (let i = 0; i < 3; i++) { //i will goes from row 1 to 3

    for (let j = 0; j < 3; j++) {

        console.log(grid[i][j]);

    }

    console.log("\n")
}