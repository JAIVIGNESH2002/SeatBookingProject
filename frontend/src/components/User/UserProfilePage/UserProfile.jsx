import { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";
import OpcoLogo from './other-opco-logo.jpg'; // Import the image file


const UserProfile = () => {
  const [associate_id, set_associate_id] = useState(localStorage.getItem('id'));
  const [user_info, set_user_info] = useState({})
  const [loading, setloading] = useState(true);

  useEffect(() => {

    try {
      const fetchdata = async () => {
        console.log(associate_id);
        console.log('Associate ID:', associate_id);
        const response = await axios.get(`http://localhost:3000/api/auth/get-user/${associate_id}`);
        console.log(response.data.data);
        set_user_info(response.data.data)
        setloading(false);
      }
      fetchdata();
    }
    catch (err) {
      console.log("Error in fetching user info in Userprofile page")
      console.log(err);
    }
  }, [])

  return (
    <>
     {loading ? (
  <h1>Loading</h1>
) : (
  <div className="user-profile-container">
    <div className="user-profile-header">
      {/* <img src={OpcoLogo} alt="Veralto Logo" className="user-profile-logo" /> */}
      <h1>Hi, {user_info.associate_name} 👋</h1>
    </div>
    <div className="user-profile-body">
      <div className="user-profile-info">
        <div className="user-profile-info-row">
          <label>Associate ID:</label>
          <input type="text" value={user_info.associate_id} readOnly />
        </div>
        <div className="user-profile-info-row">
          <label>Email:</label>
          <input type="text" value={user_info.email} readOnly />
        </div>
        <div className="user-profile-info-row">
          <label>Phone Number:</label>
          <input type="text" value={user_info.mobile_no} readOnly />
        </div>
        <div className="user-profile-info-row">
          <label>Manager ID:</label>
          <input type="text" value={user_info.manager_id} readOnly />
        </div>
        <div className="user-profile-info-row">
          <label>Manager Name:</label>
          <input type="text" value={user_info.manager_name} readOnly />
        </div>
      </div>
      <div className="user-profile-image">
        {/* You can add user's profile image here */}
        {/* <img src={user_info.profile_image} alt="User Profile" /> */}
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default UserProfile
