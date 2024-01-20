import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "./NurseProfile.css";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

export default function NurseProfile() {
  const [popup, setPopup] = useState(false);
  let { id } = useParams();
  let [nurseData, setNurseData] = useState({});

  const [data, setData] = useState({
    Reason: "",
    Requirements: [],
    Status: 0,
    City: "",
    BiddingAmount: 0,
  });




  useEffect(() => {
    fetch(`http://localhost:3001/user/nurse/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setNurseData(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="nurseProfile">
        <div className="nurseProfileLeft">
          <img src={nurseData.ImgUrl} alt="" />
          <h6 className="mt-3">About</h6> <hr />
          <p> {nurseData.AboutMe} </p>
        </div>
        <div className="nurseProfileRight">
          <h3> {nurseData.Name} </h3>
          <h6> {nurseData.Address} </h6>

          <div classname="rating">
            <p className="mt-4 nurseExp">EXPERIENCE</p>
            {[...Array(nurseData.Ratings)].map((a, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <div className="profilebuttcont">
            <ul className="nav nav-tabs">
              <li className="nav-item mt-4">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>
            <div>
              <button
                onClick={() => {
                  setPopup(true);
                }}
              >
                SEND REQUEST!
              </button>
            </div>
          </div>

          <table className="nurseProfileTable">
            <tbody>
              <h6 className="my-4">Personal Information</h6>
              <tr>
                <td>Name: </td>
                <td> {nurseData.Name} </td>
              </tr>

              <tr>
                <td>Address: </td>
                <td> {nurseData.Address} </td>
              </tr>

              <tr>
                <td>City: </td>
                <td> {nurseData.City} </td>
              </tr>

              <tr>
                <td>State: </td>
                <td> {nurseData.State} </td>
              </tr>

              <h6 className="my-4">Work Information</h6>

              <tr>
                <td>Skills: </td>
                <td> {nurseData.Name} </td>
              </tr>

              <tr>
                <td>Skill Rating: </td>
                <td> {nurseData.Skilled} </td>
              </tr>

              <tr>
                <td>Certificates: </td>
                {/* <td> {nurseData.Links.certificate} </td> */}
              </tr>

              <tr>
                <td>Achievements: </td>
                {/* <td> {nurseData.Links.achievement} </td> */}
              </tr>

              <h6 className="my-4">Personal Information</h6>

              <tr>
                <td>Skills: </td>
                <td> {nurseData.Name} </td>
              </tr>

              <tr>
                <td>Skill Rating: </td>
                <td> {nurseData.Skilled} </td>
              </tr>

              <tr>
                <td>Certificates: </td>
                {/* <td> {nurseData.Links.certificate} </td> */}
              </tr>

              <tr>
                <td>Achievements: </td>
                {/* <td> {nurseData.Links.achievement} </td> */}
              </tr>
            </tbody>
          </table>

          <div className="my-5"></div>
        </div>
      </div>

      {popup && (
        <div className={"overlay"} onClick={() => setPopup(false)}>
          <motion.div
            animate={{
              opacity: [0, 0.5, 1, 1],
              scale: [0.6, 1.1, 1, 1],
              transition: { duration: 0.2 },
            }}
            className={"popup"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={"CrossBtn"} onClick={() => setPopup(false)}>
              <AiFillCloseCircle />
            </div>  
                <h2 className="headingLarge">SEND REQUEST!</h2>
            <form className="Requestform">
                <input
                    className={"inputSmall"}
                    required={true}
                    onChange={(e) => handle(e)}
                    placeholder="Bidding price"
                    value={data.MeetLink}
                    type="url"
                    id="MeetLink"
                    />
                <input
                    className={"inputLarge"}
                    required={true}
                    onChange={(e) => handle(e)}
                    placeholder="Requirements"
                    value={data.MeetLink}
                    type="url"
                    id="MeetLink"
                    />
                <textarea
                    required={true}
                    className={"reviewBox"}
                    onChange={(e) => handle(e)}
                    placeholder="Write your Reason"
                    value={data.Review}
                    type="text"
                    id="Review"
                  />
                  <button onClick={()=>setPopup(false)} >SUBMIT</button>
            </form>

          </motion.div>
        </div>
      )}
    </>
  );
}
