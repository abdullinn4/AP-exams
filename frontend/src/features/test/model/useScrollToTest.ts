import {type RefObject, useEffect} from "react";

export const useScrollToTest = (
    view: "instruction" | "inProgress" | "summary" | "results" | string,
    testRef: RefObject<HTMLElement | null>
) => {

    useEffect(() => {

        if (!testRef.current) return;

        // Скроллим только на нужные стадии
        if (view === "inProgress" || view === "summary" || view === "results") {
            testRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [view, testRef]);
};
