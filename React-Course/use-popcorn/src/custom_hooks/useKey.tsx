import { useEffect } from 'react';

export const useKey = (key: string, action: () => void) => {
    useEffect(() => {
        const callBack = (e: KeyboardEvent) => {
            if (e.code.toLowerCase() === key.toLowerCase()) {
                action();
            }
        };

        document.addEventListener('keydown', callBack);
        return () => document.removeEventListener('keydown', callBack);
    }, [key, action]);
};
