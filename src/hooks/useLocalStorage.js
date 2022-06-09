import { useEffect, useReducer } from "react";

const useLocalStorage = (key, reducer) => {
    function inicializacionDiferida() {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : [];
    }

    const [data, dispatch] = useReducer(reducer, [], inicializacionDiferida);

    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem(key, stringifiedData);
    }, [data, key]);

    return [data, dispatch];
}

export default useLocalStorage;