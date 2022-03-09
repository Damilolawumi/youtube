import './App.css';
import {VideoCard} from "./components/VideoCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {Cards} from "./components/Cards";
import {SideBar} from "./components/SideBar";
import {Header} from "./components/Header";


export const APIurl = "https://www.googleapis.com/youtube/v3"

function App() {


    return (
        <div className="App">
            <Header/>
            <section className="App-section">
                <SideBar/>
                <Cards/>
            </section>


        </div>
    );
}

export default App;
