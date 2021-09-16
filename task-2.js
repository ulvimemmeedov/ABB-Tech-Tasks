/*
    Task 2
    Author : Ulvi Memmedov
*/
/*
    Input valiable.
    If you want to make changes in the inputs, change it here.
*/ 
var c = [
    [5, 4, 4],
    [4, 3, 4],
    [3, 2, 4],
    [2, 2, 2],
    [3, 3, 4],
    [1, 4, 4],
    [4, 1, 1]
]


// Function
const neighbourCountry = (A, B, i, j, N, M) => {
    if (B[i][j] === -1) return -1;
    
    B[i][j] = -1;
    
    if (i + 1 < N) {
    
        if (A[i + 1][j] === A[i][j]) {
            neighbourCountry(A, B, i + 1, j, N, M);
        }

    }
    if (i - 1 >= 0) {
        
        if (A[i - 1][j] === A[i][j]) {
            neighbourCountry(A, B, i - 1, j, N, M);
        }

    }
    if (j + 1 < M) {
       
        if (A[i][j + 1] === A[i][j]) {
            neighbourCountry(A, B, i, j + 1, N, M);
        }
    
    }
    if (j - 1 >= 0) {
    
        if (A[i][j - 1] === A[i][j]) {
            neighbourCountry(A, B, i, j - 1, N, M);
    
        }

    }

}

const countOfCountry = A => {
    let sum = 0;

    const ALENGTH = A.length;

    const A0LENGTH = A[0].length;

    if (ALENGTH === 0 || A0LENGTH === 0) {
        return 0;
    }

    const B = A.map(e => e.slice());

    for (let i = 0; i < ALENGTH; i++) {

        for (let j = 0; j < A0LENGTH; j++) {
            if (B[i][j] >= 0) {
                neighbourCountry(A, B, i, j, ALENGTH, A0LENGTH)
                sum += 1;
            }
        }

    }
    return sum;

}

console.log(countOfCountry(
    [
        [5, 4, 4],
        [4, 3, 4],
        [3, 2, 4],
        [2, 2, 2],
        [3, 3, 4],
        [1, 4, 4],
        [4, 1, 1]
    ]
)); // Output 11