import {useEffect, useState} from "react";
import axios from "axios";
import {APIurl} from "../App";
import {VideoCard} from "./VideoCard";
import Loader from "react-loader-spinner";
import {Header} from "./Header";

export const CardDetails = () => {
    const [youtubeData, setYoutubeData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setLoading(true)
        axios.get(`${APIurl}/search?part=snippet&type=video&maxResults=16&q=programming&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
            .then((response) => {
                console.log(response.data)
                setYoutubeData(response.data.items)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error.response)
            })
    }

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

            </div>
        </div>

    )
}

