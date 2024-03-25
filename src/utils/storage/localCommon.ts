function createLocalStorage() {
	function set<K>(key: K, value: any) {
		try {
			const json = JSON.stringify(value)
			window.localStorage.setItem(key as string, json)
		} catch (e) {}
	}

	function get<K>(key: K) {
		const json = window.localStorage.getItem(key as string)
		return JSON.parse(json)
	}

	function remove(key: any) {
		window.localStorage.removeItem(key as string)
	}
	function clear() {
		window.localStorage.clear()
	}

	return {
		set,
		get,
		remove,
		clear,
	}
}

export const localStgc = createLocalStorage()
