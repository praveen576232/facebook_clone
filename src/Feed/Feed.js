import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryRails from "./StoryRails";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../Firebase/firebase";
function Feed() {
  const [poasts, setPoasts] = useState([]);

  useEffect(() => {
    db.collection("poasts").orderBy("timeStamp","desc").onSnapshot((snapshot) =>
      setPoasts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);


  return (
    <div className="feed">
      <StoryRails></StoryRails>
      <MessageSender></MessageSender>
      {poasts.map((poast) => (
        <Post
        key = {poast.id}
        image ={poast.data.image}
        username ={poast.data.username}
        profileUrl={poast.data.profileUrl}
        timestamp={poast.data.timeStamp}
        message={poast.data.message}
        />
      ))}
      
    </div>
  );
}

export default Feed;
