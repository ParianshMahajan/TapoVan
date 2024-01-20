import React from "react";
import UserCard from "./UserCard";
import "../Dashboard.css";
const UserProfile = () => {
  const sampleUser = {
    ImgUrl: "https://avatars.githubusercontent.com/u/116679976?v=4",
    Name: "Pariansh",
    Email: "paianshm@example.com",
    PhoneNumber: "123-456-7890",
    Address: "123 Patiala, Punjab",
  };

  return (
    <div className="dashboard-container">
      <div className="user-profile">
        <h1>User Profile</h1>
        <UserCard user={sampleUser} />
      </div>

      {/* <div className="past-requests-container">
        <PastRequests pastRequests={pastRequestsData} />
      </div> */}

      {/* <div className="past-applications-container">
        <PastUserApplications pastApplications={pastUserApplicationsData} />
      </div> */}
    </div>
  );
};

export default UserProfile;
