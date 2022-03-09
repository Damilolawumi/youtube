import React from "react";
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderContainer>
            <p><i className="fa-solid fa-bars margin"></i> <i className="fa-brands fa-youtube youtube-logo"></i>Youtube
            </p>
            <div>
                <input className='search-input' type="text" placeholder="Search"/>
                <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <button className="sign-in-btn"><i className="fa-solid fa-user space"></i>Sign in</button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  /*max-width: 1440px;*/
  align-items: center;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 3px;
  justify-content: space-between;
  padding: 0 16px 0px 16px;

  p .margin {
    width: 25px;
    margin-right: 15px;
  }

  p .youtube-logo {
    margin-right: 3px;
    color: red;
    font-size: 18px;
  }

  div {
    .search-input {
      width: 363px;
      height: 34px;
      border: 1px solid #b5afaf;
      padding-left: 8px;
      padding-right: 8px;
      font-size: 14px;
      line-height: 21px;
      font-family: 'Roboto', sans-serif;
      color: rgba(73, 73, 73, 0.5);
    }

    .search-btn {
      height: 39px;
      width: 64px;
      background: #F8F8F8;
      border: 1px solid #d3d3d3;
      box-sizing: border-box;
      border-radius: 0px 2px 2px 0px;
      color: #b5afaf;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      line-height: 21px;
      cursor: pointer;
      border: 1px solid #b5afaf;
      
      .space {
        margin-right: 8px;
      }
    }

    .search-btn:hover {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.10);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
    }
  }

  .sign-in-btn {
    font-family: 'Roboto', sans-serif;
    width: 83px;
    height: 34px;
    border: 1px solid #2B7CDD;
    color: #2B7CDD;
    background: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .sign-in-btn:hover {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border: 2px solid #2B7CDD;
  }
`;
