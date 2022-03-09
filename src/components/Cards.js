import {useEffect, useState, useCallback, useRef} from "react";
import axios from "axios";
import {APIurl} from "../App";
import {VideoCard} from "./VideoCard";
import {Header} from "./Header";
import useFetch from "../hooks/useFetch";

export const Cards = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(undefined);
    const { loading, error, list:youtubeData, nextPageToken } = useFetch(query, page);
    const loaderRef = useRef(null);


    const callbackFunction = (entries) => {
        const [ entry ] = entries
        if (entry.isIntersecting) {
            setPage((prev) => nextPageToken);
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold:1.0
    }
    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)
        if (loaderRef.current) observer.observe(loaderRef.current)

        return () => {
            if(loaderRef.current) observer.unobserve(loaderRef.current)
        }
    }, [loaderRef, options])


    return (
        <div className="card-details">
            <div className="tags-container">
                <p className="tag">All</p>
                <p className="tag">Deep House</p>
                <p className="tag">Playlist</p>
                <p className="tag">Live</p>
                <p className="tag">Acoustic guitar</p>
                <p className="tag">Music</p>
                <p className="tag">Chill-out music</p>
                <p className="tag">Music</p>
                <p className="tag">Brazillian Music</p>
                <p className="tag">Arrocha</p>
                <p className="tag">History</p>
            </div>

            <div className="cards">
                {youtubeData.map((data, index) => {
                    return (
                        <VideoCard key={index} data={data}/>
                    )
                })}
                {loading && <p>Loading...</p>}
                {error && <p>Error!</p>}
                <div ref={loaderRef} style={{marginBottom:40}}/>
            </div>
        </div>

    )
}

