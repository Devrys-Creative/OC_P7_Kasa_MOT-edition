import { useState, useEffect } from 'react';

export function useFetch(url) {

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        if (!url) return

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

    // console.log(`isloading : ${isLoading} ; error : ${error}`);
    // console.log(data);
    return { isLoading, data, error };
}