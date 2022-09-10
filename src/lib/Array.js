class CostumArray {
    constructor(lenght) {
        this.reconstruct(lenght)
    }

    reconstruct(lenght) {
        let arr = new Array(lenght)
        for (let i = 0; i < lenght; i++) {
            arr[i] = Math.floor(Math.random() * 100) + 1;
        }
        this.values = [...arr];
    }

}

export const array = new CostumArray(10);