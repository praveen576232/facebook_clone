import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";
function Story({ image, profileSrc, profileName }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc}></Avatar>
      <h4>{profileName}</h4>
    </div>
  );
}

export default Story;
