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
        let result: number[][] = [];

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
}
