import "./Post.css";
import React from "react";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
function Post({ image, username, profileUrl, timestamp, message }) {
  return (
    <div className="post">
      <div className="poast_top">
        <Avatar className="profile_image" src={profileUrl}></Avatar>
        <div className="poast_top_info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="poast_bottom">
  <p>{message}</p>
      </div>
      <div className="poast_image">
      <img alt="" src={image}></img>
      </div>
       <div className="poast__options">
          <div className="poast__option">
          <ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon>
           <p>Like</p>
          </div>
          <div className="poast__option">
          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
           <p>Comments</p>
          </div>
          <div className="poast__option">
          <NearMeOutlinedIcon></NearMeOutlinedIcon>
           <p>Share</p>
          </div>
          <div className="poast__option">
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
          </div>
         
       </div>
    </div>
  );
}

export default Post;
