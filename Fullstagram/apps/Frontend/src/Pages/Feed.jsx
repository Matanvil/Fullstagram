import React from "react";
import PostsList from '../Components/PostsList';

import Header from "../Components/header";
import '../Dist/feed.css';

const Feed = () => {
  return (
    <React.Fragment>
      <Header />;
      <PostsList />;
    </React.Fragment>
  );
};

export default Feed;
