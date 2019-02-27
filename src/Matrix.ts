export function multiply(m1: Matrix, m2: Matrix) {
    if (m1.columns !== m2.rows) {
        throw new Error(`Dimensions must agree`);
    }

    let result: number[][] = [];

    for (let r = 0; r < m1.rows; ++r) {
        result[r] = [];

        for (let c = 0; c < m2.columns; ++c) {
            result[r][c] = 0;

            for (let i = 0; i < m1.columns; ++i) {
                result[r][c] += m1.data[r][i] * m2.data[i][c];
            }
        }
    }

    return new Matrix(result);
}

export class Matrix {
    public data: number[][];
    public columns: number;
    public rows: number;

    constructor(data: number[][]) {
        this.data = data;
        this.columns = data[0].length;
        this.rows = data.length;
    }

    public transpose() {
        const result: number[][] = [];

        for (let c = 0; c < this.columns; c++) {
            result[c] = [];

            for (let r = 0; r < this.rows; r++) {
                result[c][r] = this.data[r][c];
            }
        }

        this.data = result;
        this.columns = this.rows;
        this.rows = this.columns;
    }

    public toString() {
        return this.data.toString();
    }

    public getCell(column: number, row: number) {
        if (this.columns < column) {
            throw new Error(`Index columne=${column} out of bound [1, ${this.columns}]`);
        }

        if (this.rows < row) {
            throw new Error(`Index row=${row} out of bound [1, ${this.rows}]`);
        }

        return this.data[column - 1][row - 1];
    }

    public getColumn(column: number): Matrix {
        if (this.columns < column) {
            throw new Error(`Index column=${column} out of bound [1, ${this.columns}]`);
        }

        let result = [];

        for (let r = 0; r < this.rows; r++) {
            result.push(this.data[column - 1][r]);
        }

        return new Matrix(result);
    }

    public getRow(row: number): Matrix {
        if (this.rows < row) {
            throw new Error(`Index row=${row} out of bound [1, ${this.rows}]`);
        }

        let result = [];

        for (let c = 0; c < this.columns; c++) {
            result.push(this.data[c][row - 1]);
        }

        return new Matrix(result);
    }
}