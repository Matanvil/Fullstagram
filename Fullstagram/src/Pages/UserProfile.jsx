import { Fragment } from "react";
import Header from "../Components/Header";
import UserHeader from "../Components/UserHeader";


import "../Dist/user-profile.css";

const UserProfile = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="profile-page-wrapper">
        <UserHeader></UserHeader>
        <div className="post-display-buttons">
          <button>POSTS</button>
          <button>SAVED</button>
          <button>TAGGED</button>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
