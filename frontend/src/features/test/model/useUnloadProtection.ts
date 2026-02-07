import { useEffect } from "react";

export const useUnloadProtection = (isTestInProgress: boolean) => {
    useEffect(() => {
        if (!isTestInProgress) return;

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            e.returnValue = ''; // важно для некоторых браузеров
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isTestInProgress]);
};
