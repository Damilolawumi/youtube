import React from "react";
import moment from "moment";
import styled from "styled-components";

export const VideoCard = ({data}) => {
    // console.log(data)
    return (
        <CardContainer>
            <img src={data?.snippet?.thumbnails?.medium?.url} alt="big-img"/>

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
        </CardContainer>
    )
}

const CardContainer = styled.div`
  //max-width: 265px;
  margin: 10px 10px 5px 10px;
  background-color: white;
  transition: all 200ms ease-in;
  transform: scale(1);

  .add-on-div {
    display: none;
  }

  :hover {
    transition: all 200ms ease-in;
    transform: scale(1.1);
    z-index: 10;

    .add-on-div {
      display: block;
    }

    .mini-container .smallImg {
      transform: scale(1);
    }
  }

  img {
    width: 100%;
  }

  .mini-container {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-top: 8px;

    .smallImg {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .title-div {
      padding: 0px 10px 0px 10px;

      .title-p1 {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: black;
        font-weight: 500;
        line-height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        /* white-space: nowrap; */
        width: 216px;
        /* max-width: 200px; */
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        max-width: 200px;
      }

      .title-p2 {
        margin-top: 6px;
        color: #AAAAAA;
        font-size: 12px;

        .date {
          margin-top: 5px;
          color: #AAAAAA;
          font-size: 14px;
        }
      }

      .title-live {
        font-family: 'Roboto', sans-serif;
        color: red;
        border: 1px solid red;
        font-size: 13px;
        width: 63px;
        padding: 4px;
        margin-top: 7px;
        font-weight: 500;
      }

    }
  }

  .add-on-div {
    margin-top: 17px;

    .add-on {
      font-family: 'Roboto', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 265px;
      height: 40px;
      background: #EEEEEE;
      margin: 8px;
      color: #7A7A7A;
      border-radius: 3px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;

      :hover {
        background: rgba(238, 238, 238, 0.63);
        color: #706f6f;
      }
    }
  }

`
