import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {APIurl} from "../App";

function useFetch(query, pageToken) {
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(undefined);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await  axios.get(`${APIurl}/search`, {
                params:{
                    part:"snippet",
                    type:'video',
                    maxResults:"20",
                    q:'programming',
                    key:process.env.REACT_APP_YOUTUBE_API_KEY,
                    pageToken:pageToken || undefined
                }
            })
            await setList((prev) => [...prev, ...res.data.items]);
            await setNextPageToken((prev) => res?.data?.nextPageToken);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, pageToken]);

    useEffect(() => {
        sendQuery(query);
    }, [query, sendQuery, pageToken]);

    return { loading, error, list, nextPageToken };
}

export default useFetch;