import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Searchbar from "../Components/Searchbar/Searchbar";
import Selector from "./Components/Selectors/Selector";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home hero">
        <div className="homeHeadings typewriter">
          <h1 className="homeHead">TapoVann</h1>
          <h4 className="homeTagUp">Sehat Ka Saathi</h4>
     
          <p className="homeTagDown">
            24/7 Service, Private Consultation + Emergency Services <br />
            Starts at just 10$, Exclusively on our mobile app
          </p>

        </div>
        <div className="homeSearchCont">
          <Searchbar width="60" />
        </div>

        <div className="homeSelectorCont">
          <div className="homeSelector">
            <h5>Are You Looking For:</h5>
            <div className="homeSelectors">
              <Selector id="1" details="lorem ipsum etc etc 1" />
              <Selector id="2" details="lorem ipsum etc etc 2" />
              <Selector id="3" details="lorem ipsum etc etc 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="homeVideoCont">
        <div className="homeVideo"></div>
        <div className="homeVideoSide leftside">
          <div className="sideIcon"></div>
          <div>
            <h5 className="mb-2">Consultant</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="homeVideoSide righthside">
          <div className="sideIcon"></div>
          <div>
            <h5 className="mb-2">24/7 Service</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <div className="homeNurseTypes">
        <h1>
          Hire Top Nurses Online For <br /> Any Health Priority
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur
          adipisicing.
        </p>

        <div className="homeNurseTypeSelectors">
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
          <div className="homeNurseTypeSelector">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h4>lorem</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
