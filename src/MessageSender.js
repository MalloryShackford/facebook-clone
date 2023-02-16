import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import db from './firebase';

function MessageSender() {
    const [{ user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl, 
         })
    
    setInput("");
    setImageUrl("");
    }


  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src={user.photoURL} />
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender_input" 
                placeholder={`What's on your mind, ${user.displayName}?`}
                />
                <input 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                type="text" 
                placeholder="img URL (Optional)" />
                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
        </div>
        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{ color: "red" }} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style= {{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <EmojiEmotionsOutlinedIcon style= {{ color: "goldenrod"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender