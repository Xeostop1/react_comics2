import React from "react";
import {useState, useEffect} from "react";
//import axios from "./axios";
//import requests from "./Request";
import axios from "axios";
import "./Banner.css"



function Banner() {
    //====api 정보 가지고 오기====
    const [manga, setManga]=useState([]);

    const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
    const axios = require('axios');
    const baseUrl = 'https://api.mangadex.org';

    // ===axios
    const getMangas=async()=>{
        const json=await(
          await fetch("https://api.jikan.moe/v4/manga")
        ).json(); 
         console.log(json.data);  
          setManga(json.data);  //setMovies(json.data.movies);
        //   setLoading(false);
      }
      useEffect(()=>{
        getMangas()},[]);

    // useEffect(()=>{
    //     async function fetchData() {
    //         const request=await axios.get(requests.url);
    //         setManga(
    //             request.data.results[
    //                 Math.floor(Math.random()*request.data.results.length-1)
    //             ]
    //         )
    //         return request;
    //     }
    //     fetchData();
    // },[]);
    // console.log("******");
    // console.log(manga);

    // ====설명 줄이기...=====
    function truncate(str,num) {
        return str?.length>num ?str.substr(0,num -1)+ "...": str;
    }
    return(
        <header 
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
                backgroundPosition: "center center",
            }}
            >
             <div className="banner_contents">
                <h1 className="banner_title">Comies Name</h1>    
                <div className="banner_btns">
                    <button className="banner_btn">Play</button>
                    <button className="banner_btn">My List</button>
                </div>
                    <h1 className="banner_description">
                        {/* 150자로 제한 */}
                        {truncate(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,160)}
                    </h1>
                </div>      
                <div className="banner_fadebtn"/>
        </header>
    )

}

export default Banner;

//https://ytube.io/3aAi
// 1:01:55 까지 시청