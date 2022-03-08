import React from 'react';

export const SideBar = () => {
    return (
        <div className="side-bar-container">
            <p className="side-bar-p"><i className="fa-solid fa-house margin"></i> Home</p>
            <p className="side-bar-p"><i className="fa-solid fa-compass margin"></i> Explore</p>
            <p className="side-bar-p"><i className="fa-solid fa-section margin"></i> Shorts</p>
            <p className="side-bar-p"><i className="fa-brands fa-youtube margin"></i> Subscriptions</p>
            <p className="side-bar-p"><i className="fa-solid fa-arrow-rotate-right margin"></i> Originals</p>
            <p className="side-bar-p"><i className="fa-solid fa-music margin"></i> Music</p>

            <p className="side-bar-p"><i className="fa-brands fa-youtube margin"></i> Library</p>
            <p className="side-bar-p"><i className="fa-solid fa-files margin"></i> History</p>
            <p className="side-bar-p"><i className="fa-solid fa-video margin"></i> Your videos</p>
            <p className="side-bar-p"><i className="fa-solid fa-clock margin"></i> Watch Later</p>
            <p className="side-bar-p"><i className="fa-solid fa-circle-arrow-down margin"></i> Downloads</p>
            <p className="side-bar-p"><i className="fa-solid fa-thumbs-up margin"></i> Liked videos</p>
        </div>
    )
}