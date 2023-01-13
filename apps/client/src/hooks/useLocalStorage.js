import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
	const [storageValue, setStorageValue] = useState(() => {
		if (typeof window === "undefined") return initialValue
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})
	const setValue = value => {
		try {
			const valueToStore =
				value instanceof Function ? value(storageValue) : value
			setStorageValue(valueToStore)
			if (typeof window !== "undefined")
				localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}
	return [storageValue, setValue]
}

export default useLocalStorage
