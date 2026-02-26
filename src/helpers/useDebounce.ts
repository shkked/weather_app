export default function useDebounce(callback: () => void, delay = 1000): void {
	// TODO доделать debounce
	let timeout = setTimeout(callback, delay);
}