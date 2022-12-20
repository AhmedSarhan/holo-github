import { useEffect, useState } from "react";

export function useDebounce(value: string, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);

  // avo
  useEffect(() => {
    if (!value || value.length <= debouncedValue?.length!) {
      setDebouncedValue(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);
  return debouncedValue;
}
