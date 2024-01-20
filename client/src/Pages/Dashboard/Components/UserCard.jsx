import React, { useState } from "react";

const UserCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", editedUser);
    handleEditToggle();
  };

  const handleChangePasswordToggle = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handleSavePasswordChanges = () => {
    console.log("Saving password changes");
    handleChangePasswordToggle();
  };

  return (
    <div className="user-card">
      <img src={editedUser.ImgUrl} alt="User" className="user-image" />

      <div className="user-details">
        {isEditing && (
          <>
            <input
              type="text"
              name="Name"
              value={editedUser.Name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Email"
              value={editedUser.Email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="PhoneNumber"
              value={editedUser.PhoneNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Address"
              value={editedUser.Address}
              onChange={handleInputChange}
            />

            <div className="user-card-buttons">
              <button onClick={handleSaveChanges}>Save Changes</button>
              <button onClick={handleEditToggle}>Cancel</button>
            </div>
          </>
        )}

        {isChangingPassword && (
          <>
            <input
              type="password"
              name="NewPassword"
              placeholder="New Password"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="ConfirmNewPassword"
              placeholder="Confirm New Password"
              onChange={handleInputChange}
            />

            <div className="user-card-buttons">
              <button onClick={handleSavePasswordChanges}>Save Password</button>
              <button onClick={handleChangePasswordToggle}>Cancel</button>
            </div>
          </>
        )}

        {!isEditing && !isChangingPassword && (
          <>
            <h2>{editedUser.Name}</h2>
            <p>Email: {editedUser.Email}</p>
            <p>Phone Number: {editedUser.PhoneNumber}</p>
            <p>Address: {editedUser.Address}</p>
          </>
        )}
      </div>

      <div className="user-card-buttons-right">
        {!isEditing && !isChangingPassword && (
          <div className="user-card-buttons">
            <button className="user-btn" onClick={handleEditToggle}>
              Edit Profile
            </button>
            <button className="user-btn" onClick={handleChangePasswordToggle}>
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
