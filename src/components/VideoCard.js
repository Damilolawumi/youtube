import React from "react";
import bigImg from "../images/bigImg.jpg";
import smallImg from "../images/smallImg.jpg";
import moment from "moment";

export const VideoCard = ({data}) => {

    console.log(data)
    return (
        <div className="container">
            <img className="bigImg" src={data?.snippet?.thumbnails?.medium?.url} alt="big-img"/>

            {/*<div>*/}
            {/*    <p><i className="fa-solid fa-clock"></i> </p>*/}
            {/*    <p><i className="fa-solid fa-layer-group"></i> </p>*/}
            {/*</div>*/}

            <div className="mini-container">
                <div>
                    <img className="smallImg" src={data?.snippet?.thumbnails?.default?.url} alt="small-img"/>
                </div>

                <div className="title-div">
                    <p className="title-p1">{data?.snippet?.title}</p>
                    <p className="title-p2">{data?.snippet?.channelTitle}</p>
                    <p className="title-p2">21k views . <span
                        className="date"> {moment(data?.snippet?.publishedAt).format('MM-DD-YYYY')}  </span></p>
                    {data?.snippet?.liveBroadcastContent !== "none" && (
                        <p className="title-live">LIVE NOW</p>
                    )}
                </div>
            </div>

            <div className="add-on-div">
                <p className="add-on"><i className="fa-solid fa-clock margin"></i>WATCH LATER</p>
                <p className="add-on"><i className="fa-solid fa-layer-group margin"></i>ADD TO QUEUE</p>
            </div>
        </div>
    )
}
