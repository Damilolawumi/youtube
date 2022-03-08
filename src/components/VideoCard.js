import React from "react";
import bigImg from "../images/bigImg.jpg";
import smallImg from "../images/smallImg.jpg";

export const VideoCard = () => {
    return (
        <div className="container">
            <img className="bigImg" src={bigImg} alt="big-img"/>
            <div className="mini-container">
                <div>
                    <img className="smallImg" src={smallImg} alt="small-img"/>
                </div>

                <div className="title-div">
                    <p className="title-p1">Live look at Kyiv as russia invades Ukraine</p>
                    <p className="title-p2">Kiekie tv</p>
                    <p className="title-p2">21k views <span className="date">34/02/1992</span></p>
                </div>
            </div>
        </div>
    )
}
