import {useEffect, useState, useRef} from "react";
import {VideoCard} from "./VideoCard";
import useFetch from "../hooks/useFetch";
import styled from "styled-components"

export const Cards = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(undefined);
    const {loading, error, list: youtubeData, nextPageToken} = useFetch(query, page);
    const loaderRef = useRef(null);

    const callbackFunction = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
            setPage((prev) => nextPageToken);
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (loaderRef.current) observer.observe(loaderRef.current)

        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current)
        }
    }, [loaderRef, options])

    return (
        <CardsWrapper>
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
                <div ref={loaderRef} className="more-content-style"/>
            </div>
        </CardsWrapper>
    )
}

const CardsWrapper = styled.div`
  flex:1;
  padding-bottom: 50px;

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    border-top: 1px solid #D2D2D2;
    border-bottom: 1px solid #D2D2D2;
    padding: 8px 0px 8px 0px;

    @media screen and (max-width: 1210px) and (min-width: 769px) {
      display: none;
    }

    @media  screen and (max-width: 768px) and (min-width: 470px){
      display: none;
    }

    @media screen and (max-width: 469px){
      display: none;
    }

    .tag {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      margin: 0px 5px 0px 5px;
      color: black;
      background: #EFF2F2;
      border: 1px solid #D2D2D2;
      border-radius: 16px;
      cursor: pointer;
      padding: 10px;
    }

    .tag:hover {
      color: black;
      background: #E5E5E5;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    background: #F9F9F9;
    padding:16px;

    .more-content-style{
      margin-bottom:40px;
    }
  }
`;




