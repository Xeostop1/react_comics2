import React from "react";
import { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    //====스크롤====
    const [show, handelShow]=useState(false);

    const transitionNavBar=()=>{
        const scrollY=window.scrollY;
        scrollY>100 ?handelShow(true):handelShow(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar)
        //리턴값으로 화면을 지원주는 건가??
        return ()=> window.removeEventListener("scroll", transitionNavBar)

    },[]);


    return(
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" src="https://rk9355.p3cdn1.secureserver.net/wp-content/uploads/2020/04/cropped-kinginclogo1_1-2048x855.png" alt="mangaking"/>
                <img className="nav_avatar" src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22223-tiger-face-icon.png" alt="tiger" />
                <h1>this is the Nav</h1>
            </div>
        </div>
    )
}

export default Nav;