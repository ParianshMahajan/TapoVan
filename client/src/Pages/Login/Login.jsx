import React, { useEffect, useState } from "react";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import config from "../../config";

export default function Login() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const param = queryParams.get("login");

  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();
  const [loader, setLoader] = useState(false);

  //   // to check whether loggedIn or not

  //   const url1=config.apiurl+'/admin/isadmin';
  //   const url2=config.apiurl+'/admin/verify';
  //   useEffect(() => {
  //     let token = cookies.AdminLoggedIn || "";

  //       // for superAdmin
  //       const isAdmin = async () => {
  //           const res = await axios.post(url1, {
  //             token: token,
  //           });
  //           if(res.data.status==true){
  //             navigate('/admin/dashboard');
  //           }
  //       };

  //       // for superAdmin
  //       const isSuperAdmin = async () => {
  //           const res = await axios.post(url2, {
  //             token: token,
  //           });
  //           if(res.data.status==true){
  //             navigate('/admin102217023/apps');
  //           }
  //           else{
  //             // Normal Admin
  //             isAdmin();
  //           }
  //       };

  //       // if (token === "") {
  //       //   return;
  //       // }
  //       // else{
  //       //   isSuperAdmin();
  //       // }

  //     }, []);

  // SUBMIT
  const [showErr, setShowErr] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [data, setData] = useState({
    Email: "",
    Password: "",
    OTP: "",
  });

  const urlNP1 = config.apiurl + "/nurse/login1";
  const urlNP2 = config.apiurl + "/nurse/login2";

  const urlUP1 = config.apiurl + "/user/login1";
  const urlUP2 = config.apiurl + "/user/login2";

  // Part 1
  const submitP1 = (e) => {
    e.preventDefault();
    setShowErr("");
    setLoader(true);
    axios.post(param == "Nurse" ? urlNP1 : urlUP1, data).then((res) => {
      let data = res.data;
      setLoader(false);
      if (data.status === true) {
        setShowOTP(true);
      } else {
        setShowErr("Invalid Credentials");
      }
    });
  };

  // Part 2
  const submitP2 = (e) => {
    e.preventDefault();
    setShowErr("");
    setLoader(true);
    axios.post(param == "Nurse" ? urlNP2 : urlUP2, data).then((res) => {
      let data = res.data;
      setLoader(false);
      if (data.status === true) {
        setCookies(`Is${param}LoggedIn`, data.token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
        });
        navigate(`/${param}/dashboard`);
      } else {
        setShowErr("Invalid OTP");
      }
    });
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div className="login">
      <div className="loginLeft">
        <img src="" alt="" />
      </div>

      <div className="loginRight">
        <h1 className="homeHead">तपोवन्</h1>

        <h3>LOGIN</h3>
        <form action="" onSubmit={(e) => submitP1(e)}>
          <div className="loginFormGroup">
            <label htmlFor="Email">Email</label>
            <input
              value={data.Email}
              required={true}
              onChange={(e) => handle(e)}
              type="Email"
              name="Email"
              id="Email"
              placeholder="abcd@example.com"
            />
          </div>

          <div className="loginFormGroup">
            <label htmlFor="Password">Password</label>
            <input
              value={data.Password}
              required={true}
              onChange={(e) => handle(e)}
              type="Password"
              name="Password"
              id="Password"
              placeholder="*******"
            />
          </div>
          {showOTP && (
            <div className="loginFormGroup">
              <label htmlFor="OTP">OTP</label>
              <input
                type="OTP"
                name="OTP"
                id="OTP"
                placeholder="*******"
                value={data.OTP}
                required={true}
                onChange={(e) => handle(e)}
              />
            </div>
          )}
          <div className="loginFormGroup">
            <div className="button">
              {loader && (
                <span
                  className="loader"
                  style={{ scale: "0.5", marginTop: "-0.5%" }}
                ></span>
              )}
              {!loader && <>LOGIN</>}
            </div>
          </div>

          {showErr != "" && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="err"
            >
              <h5>Incorrect Credentials !</h5>
            </motion.div>
          )}

          <p>
            Dont have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
