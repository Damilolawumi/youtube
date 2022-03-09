import React from 'react';
import styled from "styled-components";

export const SideBar = () => {
    return (
        <SidebarContainer className="side-bar-container">
            <p className="side-bar-p"><i className="fa-solid fa-house margin"></i> Home</p>
            <p className="side-bar-p"><i className="fa-solid fa-compass margin"></i> Explore</p>
            <p className="side-bar-p"><i className="fa-solid fa-section margin"></i> Shorts</p>
            <p className="side-bar-p"><i className="fa-brands fa-youtube margin"></i> Subscriptions</p>
            <p className="side-bar-p"><i className="fa-solid fa-arrow-rotate-right margin"></i> Originals</p>
            <p className="side-bar-p"><i className="fa-solid fa-music margin"></i> Music</p>

            <p className="side-bar-p"><i className="fa-brands fa-youtube margin"></i> Library</p>
            <p className="side-bar-p"><i className="fa-solid fa-layer-plus margin"></i> History</p>
            <p className="side-bar-p"><i className="fa-solid fa-video margin"></i> Your videos</p>
            <p className="side-bar-p"><i className="fa-solid fa-clock margin"></i> Watch Later</p>
            <p className="side-bar-p"><i className="fa-solid fa-circle-arrow-down margin"></i> Downloads</p>
            <p className="side-bar-p"><i className="fa-solid fa-thumbs-up margin"></i> Liked videos</p>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
  width: 240px;

  @media  screen and (max-width: 768px) and (min-width: 470px){
    display: none;
  }

  @media screen and (max-width: 469px){
    display: none;
  }

  p {
    max-width: 192px;
    height: 40px;
    color: black;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    padding: 0 24px;

    :hover {
      background: #E5E5E5;
    }

    .margin {
      width: 25px;
      margin-right: 15px;
    }
  }





`