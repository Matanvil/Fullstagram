import { Fragment, useState } from "react";
import Header from "../Components/Header";
import UserHeader from "../Components/UserHeader";
import UserPosts from '../Components/Posts/UserPosts';


import "../Dist/user-profile.css";

const UserProfile = () => {
  const [showPosts, setShowPosts] = useState(true)


  const showUserPosts = () => {
    setShowPosts(true)
  }

  const showSavedPosts = () => {
    setShowPosts(false)
  }

  return (
    <Fragment>
      <Header></Header>
      <div className="profile-page-wrapper">
        <UserHeader></UserHeader>
        <div className="post-display-buttons">
          <button onClick={showUserPosts}>POSTS</button>
          <button onClick={showSavedPosts}>SAVED</button>
          <button>TAGGED</button>
        </div>
        <div>
        {showPosts &&  <UserPosts />}
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
