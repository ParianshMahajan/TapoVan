import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import userpng from './Assets/userpic.jpg'
import config from '../../../config';
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Navbar() {
    
    const[isLogin,setIsLogin]=useState(false);

    const[userDet,setuserDet]=useState({});
    
    const url=config.apiurl+'/user/verify';
    const [cookies, setCookies, removeCookies] = useCookies();
    let token = cookies.UserLoggedIn || "";
    useEffect(()=>{
        console.log(url);
        axios.post(url,{token:token})
        .then((res)=>{
            if(res.status==true){
                setIsLogin(true);
                setuserDet({Name:res.data.Name,Email:res.data.Email,})
            }
            else{
                setIsLogin(false);
            }
        })
    },[])

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Find Nurses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        {!isLogin&&(
                            <form className="d-flex">
                                <button className="btn navbtn mx-4" style={{backgroundColor: "transparent"}} type="submit">Login</button>
                                <button className="btn navbtn" style={{backgroundColor: "#003E58", color:"White"}} type="submit">Sign Up</button>
                            </form>
                        )}
                        {isLogin&&(
                            <form className="navUserDetails">
                                <div>
                               <h4>{userDet.Name}</h4>
                               <p>{userDet.Email}</p>
                                </div>
                                <img src={userpng} alt='User Profile Pic'></img>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
