import { useCallback, useRef, useState } from 'react';

const TOAST_DURATION_MS = 1600;

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessage(null);
  }, []);

  const show = useCallback((text: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessage(text);
    timeoutRef.current = setTimeout(() => setMessage(null), TOAST_DURATION_MS);
  }, []);

  return { message, show, hide };
}
