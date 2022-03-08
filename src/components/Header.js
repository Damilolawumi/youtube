import React from "react";

export const Header = () => {
    return (
        <div className="header-container">
            <p><i className="fa-solid fa-bars margin"></i> <i className="fa-brands fa-youtube youtube-logo"></i>Youtube </p>
           <div>
               <input className='search-input' type="text" placeholder="Search"/>
               <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
           </div>
            <p><i className="fa-solid fa-grid"></i></p>

            <button className="sign-in-btn"><i className="fa-solid fa-user space"></i>Sign in</button>
        </div>
    )
}