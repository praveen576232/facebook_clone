import "./MessageSender.css";
import React,{useState} from "react";
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import db from '../Firebase/firebase';
import firebase from 'firebase'
import {useStateValue} from '../StateProvider/StateProvider'
function MessageSender() {
  const [message,SetMessage] =useState("");
  const [imageUrl,SetimageUrl] =useState("");
  const [{user}] =useStateValue();
  const onSubmitMessage =(e) =>{
    e.preventDefault();
    console.log(message);
    console.log(imageUrl);
     db.collection("poasts").add({
       image:imageUrl,
       message:message,
       profileUrl: user?.photoURL,
       timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
       username:user?.displayName
     }).catch(error => alert(error.message));
     SetMessage("")
     SetimageUrl("")
  }
  return (
    <div className="messagesender">
      <div className="messagesender_top">
        <div className="messengesender_top_left">
          <Avatar src={user?.photoURL}></Avatar>
         <form className="messengesender_top_left_form">
          <input placeholder={`what's on your mind. ${user?.displayName}?`} value={message} onChange={(e)=>SetMessage(e.target.value)}></input>
             <div className="messagesender_top_right">

               <input placeholder="image url (optional)" value={imageUrl} onChange={(e)=>SetimageUrl(e.target.value)}></input>
         
            </div>
             <button type="submit" hidden onClick={onSubmitMessage}></button>
         </form>
       

        </div>
       
      </div>
      <div className="messagesender_bottom">
        <div className="messagesender_bootom_icons_option">
          <VideoCallIcon style={{color:'red'}}></VideoCallIcon>
          <p>Live Video</p>
        </div>
        <div className="messagesender_bootom_icons_option">
          <PhotoLibraryIcon style={{color:'green'}}></PhotoLibraryIcon>
          <p>Photo/Video</p>
        </div>
        <div className="messagesender_bootom_icons_option">
          <SentimentVeryDissatisfiedIcon style={{color:'yellow'}}></SentimentVeryDissatisfiedIcon>
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
