import React from "react";
import "./PastUserApplications.css";

const PastUserApplications = ({ pastApplications }) => {
  const sampleData = [
    {
      Reason: "Health Checkup",
      Requirements: { nursing: true, medication: true },
      Report: "Routine Checkup",
      Location: { latitude: 28.6139, longitude: 77.209 },
      Address: "123 Health Street",
      City: "New Delhi",
      Amount: 1500,
      ApplicationStatus: 2,
      AmountPaid: 1200,
      NurseApp: "NurseApp1",
    },
    {
      Reason: "Post-Surgery Care",
      Requirements: { nursing: true, woundCare: true },
      Report: "Post-Surgery Recovery",
      Location: { latitude: 18.5204, longitude: 73.8567 },
      Address: "456 Recovery Lane",
      City: "Pune",
      Amount: 2500,
      ApplicationStatus: 2,
      AmountPaid: 2000,
      NurseApp: "NurseApp2",
    },
  ];

  const applicationsToDisplay = pastApplications || sampleData;

  return (
    <div className="past-user-applications">
      <h2>Past User Applications</h2>
      <ul>
        {applicationsToDisplay.map((application, index) => (
          <li key={index}>
            <p>Reason: {application.Reason}</p>
            <p>Requirements: {JSON.stringify(application.Requirements)}</p>
            <p>Report: {application.Report}</p>
            <p>Location: {JSON.stringify(application.Location)}</p>
            <p>Address: {application.Address}</p>
            <p>City: {application.City}</p>
            <p>Amount: ₹{application.Amount}</p>
            <p>
              Application Status:{" "}
              {application.ApplicationStatus === 1
                ? "Pending"
                : application.ApplicationStatus === 2
                ? "Approved"
                : "Rejected"}
            </p>
            <p>Amount Paid: ₹{application.AmountPaid}</p>
            {application.NurseApp && <p>Nurse App: {application.NurseApp}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastUserApplications;
