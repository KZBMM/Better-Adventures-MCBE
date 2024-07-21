export class BidirectionalMap {
	constructor(arr_of_arr) {
		this.key_to_value = new Map(arr_of_arr);
		this.value_to_key = new Map();
		for (let [key, value] of this.key_to_value) {
			this.value_to_key.set(value, key)
		}
	}
	get(token) {
		if (this.key_to_value.has(token) && this.value_to_key.has(token)) {
			throw new Error("Found two identical keys in bidirectional map.");
		} else if (this.key_to_value.has(token)) {
			return this.key_to_value.get(token);
		} else if (this.value_to_key.has(token)) {
			return this.value_to_key.get(token);
		} else {
			return undefined;
		}
	}
	has(token) {
		if (this.key_to_value.has(token) && this.value_to_key.has(token)) {
			throw new Error("Found two identical keys in bidirectional map.");
		} else if (this.key_to_value.has(token)) {
			return true;
		} else if (this.value_to_key.has(token)) {
			return true;
		} else {
			return false;
		}
	}
	set(key0, key1) {
		this.key_to_value.set(key0, key1)
		this.value_to_key.set(key1, key0)
	}
}

/*
		this.key_to_value = new Map(arr_of_arr);
		let inverseArr = arr_of_arr;
		for (let i = 0; i < inverseArr.length; i++) {
			let newArr = [undefined, undefined];
			newArr[0] = inverseArr[i][1];
			newArr[1] = inverseArr[i][0];
			inverseArr[i] = newArr;
		}
		this.value_to_key = new Map(inverseArr);
*/