import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import userpng from './Assets/userpic.jpg'

export default function Navbar() {
    
    const[isLogin,setIsLogin]=useState(true);
    
    useEffect(()=>{

    },[])

    return (
        <>
            <nav class="navbar navbar-expand-lg sticky">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Find Nurses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        {!isLogin&&(
                            <form class="d-flex">
                                <button class="btn navbtn mx-4" style={{backgroundColor: "transparent"}} type="submit">Login</button>
                                <button class="btn navbtn" style={{backgroundColor: "#003E58", color:"White"}} type="submit">Sign Up</button>
                            </form>
                        )}
                        {isLogin&&(
                            <form class="navUserDetails">
                                <div>
                               <h4>Pariansh Mahajan</h4>
                               <p>parianshm@gmail.com</p>
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
