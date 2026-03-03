type DebouncedFunction = (...args: unknown[]) => void;

export default function useDebounce(callback: DebouncedFunction, delay = 1000): DebouncedFunction {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: unknown[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => callback(...args), delay);
  };
}
