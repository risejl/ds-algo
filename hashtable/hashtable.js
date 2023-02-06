// implement hash table by ES6 class syntax
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class MyLinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

class Data {
	constructor(value, flag, key) {
		this.value = value;
		this.flag = flag;
		this.key = key;
	}
}

class MyHashTable {
	constructor(size) {
		this.hashtable = new Array(size);
		for (let i = 0; i < this.hashtable.length; i += 1) {
			this.hashtable[i] = null;
		}
	}	

	// hash function
	hash(value) {
		const key = value % this.hashtable.length;
		return key;
	}

	// double hashing
	doubleHash(value, primeNumber) {
		const firstKey = this.hash(value);
		const secondKey = primeNumber - (value % primeNumber);
		const key = firstKey + secondKey;
		return key;
	}

	// insert a element by chaining
	chainingInsert(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) {
			const node = new Node(value);
			let linkedlist = new MyLinkedList();
			linkedlist.head = node;
			this.hashtable[key] = linkedlist;
		} else {
			const node = new Node(value);
			let p = this.hashtable[key].head;
			while (p.next !== null) {
				p = p.next;
			}
			p.next = node;
		}
	}

	// searching a element on chains
	chainingSearch(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return false;
		else {
			let p = this.hashtable[key].head;
			while (p !== null) {
				if (p.value === value) return true;
				else p = p.next;
			}
			return false;
		}
	}

	// delete a element on chains
	chainingDelete(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return;
		else {
			let p = this.hashtable[key].head;
			if (p.value === value) {
				this.hashtable[key].head = this.hashtable[key].head.next;
				if (this.hashtable[key].head === null) this.hashtable[key] = null;
				return;
			} else {
				while (p.next !== null && p !== null) {
					if (p.next.value === value) {
						p.next = p.next.next;
						return;
					} else p = p.next;
				}
			}
		}
	}

	// insert a element by linear probing
	linearProbingInsert(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) {
			const data = new Data(value, true, key);
			this.hashtable[key] = data;
		} else {
			for (let i = key + 1; i < this.hashtable.length; i += 1) {
				if (this.hashtable[i] === null) {
					const data = new Data(value, false, key);
					this.hashtable[i] = data;
					return true;
				}
			}
			for (let i = 0; i < key; i += 1) {
				if (this.hashtable[i] === null) {
					const data = new Data(value, false, key);
					this.hashtable[i] = data;
					return true;
				}	
			}
			return false;
		}
	}

	// searching a element by linear probing
	linearProbingSearch(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return false;
		else {
			if (this.hashtable[key].value === value) return true;
			else {
				for (let i = key + 1; i < this.hashtable.length; i += 1) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) return true;
				}
				for (let i = 0; i < key; i += 1) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) return true;
				}
				return false;	
			}
		}
	}

	// delete a element by linear probing
	linearProbingDelete(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return false;
		else {
			if (this.hashtable[key].value === value) {
				this.hashtable[key] = null;
				return true;
			} else {
				for (let i = key + 1; i < this.hashtable.length; i += 1) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) {
						this.hashtable[i] = null;
						return true;
					}
				}
				for (let i = 0; i < key; i += 1) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) {
						this.hashtable[i] = null;
						return true;
					}
				}
				return false;	
			}
		}	
	}

	// insert a element by quadratic probing
	QuadraticProbingInsert(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) {
			const data = new Data(value, true, key);
			this.hashtable[key] = data;
		} else {
			for (let i = key + 1; i < this.hashtable.length; i += 2) {
				if (this.hashtable[i] === null) {
					const data = new Data(value, false, key);
					this.hashtable[i] = data;
					return true;
				}
			}
			for (let i = 0; i < key; i += 2) {
				if (this.hashtable[i] === null) {
					const data = new Data(value, false, key);
					this.hashtable[i] = data;
					return true;
				}	
			}
			return false;
		}
	}

	// searching a element by quadratic probing
	QuadraticProbingSearch(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return false;
		else {
			if (this.hashtable[key].value === value) return true;
			else {
				for (let i = key + 1; i < this.hashtable.length; i += 2) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) return true;
				}
				for (let i = 0; i < key; i += 2) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) return true;
				}
				return false;	
			}
		}
	}

	// delete a element by quadratic probing
	QuadraticProbingDelete(value) {
		const key = this.hash(value);
		if (this.hashtable[key] === null) return false;
		else {
			if (this.hashtable[key].value === value) {
				this.hashtable[key] = null;
				return true;
			} else {
				for (let i = key + 1; i < this.hashtable.length; i += 2) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) {
						this.hashtable[i] = null;
						return true;
					}
				}
				for (let i = 0; i < key; i += 2) {
					if (this.hashtable[i] === null) continue;
					else if (this.hashtable[i].value === value) {
						this.hashtable[i] = null;
						return true;
					}
				}
				return false;	
			}
		}	
	}
}