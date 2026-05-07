import { useMemo } from 'react';

export function useGuestName() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('to') || 'Tamu Undangan';
  }, []);
}
