// Import React Components
import { useState, useEffect } from 'react';

// useFetch : transmit API requests
export function useFetch<T>(url: string) {

    // States to store loading / error status + data when received
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {

        // no url = no request
        if (!url) return

        // API request
        fetch(url)
        .then((response) => {
            if( response.ok ) {
                return response.json();
            } else {
                throw new Error("Erreur lors de la récupération des questions (API)");
            }
        })
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            console.error(err);
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        });

    }, [url]);

    // sync returning status + data
    return { isLoading, data, error };
}