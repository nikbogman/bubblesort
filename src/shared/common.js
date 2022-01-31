import constants from "./constants";

class Global {
    constructor() {
        this.array = [];
        this.isSortingPaused = false;
        this.isArrayReset = false;
    }

    initArray(size) {
        for (let i = 0; i < size; i++) {
            this.array[i] = Math.floor(Math.random() * (constants.CANVAS_HEIGHT - 100 + 1)) + 100;
        }
    }
}

const global = new Global();
export default global;
