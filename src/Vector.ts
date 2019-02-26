export class Vector {
    public data: number[];
    public columns: number;
    public rows: number;

    constructor(data: number[]) {
        this.data = data;
    }

    getCell(cell: number): number {
        return this.data[cell];
    }
}
