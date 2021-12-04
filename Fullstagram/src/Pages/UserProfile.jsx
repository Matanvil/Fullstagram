import { Fragment, useState } from "react";

import Header from "../Components/Header";
import UserHeader from "../Components/UserHeader";
import UserPosts from "../Components/Posts/UserPosts";
import UserSaved from "../Components/Posts/UserSaved";
import UserTagged from "../Components/Posts/UserTagged";
import Footer from "../Components/Footer";

import "../Dist/user-profile.css";

const UserProfile = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  const [showTagged, setShowTagged] = useState(false);

  const showUserPosts = () => {
    setShowPosts(true);
    setShowSaved(false);
    setShowTagged(false);
  };

  const showSavedPosts = () => {
    setShowPosts(false);
    setShowSaved(true);
    setShowTagged(false);
  };

  const showTaggedPosts = () => {
    setShowPosts(false);
    setShowSaved(false);
    setShowTagged(true);
  };

  return (
    <Fragment>
      <Header></Header>
      <div className="profile-page-wrapper">
        <UserHeader></UserHeader>
        <div className="post-display-buttons">
          <button onClick={showUserPosts}>POSTS</button>
          <button onClick={showSavedPosts}>SAVED</button>
          <button onClick={showTaggedPosts}>TAGGED</button>
        </div>
        <div className="user-posts-container">
          <div className="user-posts-container">
            {showPosts && <UserPosts />}
            <div className="after"></div>
          </div>
          <div className="user-saved-container">
            {showSaved && <UserSaved />}
            <div className="after"></div>
          </div>
          <div className="user-tagged-container">
            {showTagged && <UserTagged />}
            <div className="after"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserProfile;
