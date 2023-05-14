class Collection {
	constructor(lenght) {
		this.reconstruct(lenght);
	}

	swapElementsAt(idx1, idx2) {
		const val = this.values;
		const col = this.colors;

		let tmp = val[idx1];
		val[idx1] = val[idx2];
		val[idx2] = tmp;

		tmp = col[idx1];
		col[idx1] = col[idx2];
		col[idx2] = tmp;

		this.values = [...val];
		this.colors = [...col];
	}

	reconstruct(lenght) {
		const val = new Array(lenght);
		const col = new Array(lenght);
		for (let i = 0; i < lenght; i++) {
			val[i] = Math.floor(Math.random() * 100) + 1;
			col[i] = "white";
		}
		this.values = [...val];
		this.colors = [...col];
	}
}

export const collection = new Collection(10);
