import React from "react";
import UserProfile from "./Components/UserProfile";
import PastUserApplications from "./Components/PastUserApplications";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="user-profile-container">
        <UserProfile />
      </div>
      <div className="past-applications-container">
        <PastUserApplications />
      </div>
    </div>
  );
};

export default Dashboard;
