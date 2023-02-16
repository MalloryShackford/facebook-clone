import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';



function Feed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => (
       setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ));
    
  }, [])

  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />

        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
        ))}

    </div>
  );
}

export default Feed



        {/* <Post 
          // key={id}
          profilePic="https://avatars.githubusercontent.com/u/93612680?v=4"
          message="Yes! It works!"
          timestamp="This is a time stamp"
          username='mallory shackford'
          image="https://media.tenor.com/12Fv9x_3mCIAAAAM/it-worked-rupaul.gif"
        />
        <Post 
          profilePic="https://avatars.githubusercontent.com/u/93612680?v=4"
          message="Just making sure it's not a fluke"
          timestamp="This is a time stamp"
          username='mallory shackford'
          image="https://media.tenor.com/t4HIrZDwx8AAAAAd/doc-brown-it-works.gif"
        />
        <Post 
          profilePic="https://avatars.githubusercontent.com/u/93612680?v=4"
          message="Yup, still here!"
          timestamp="This is a time stamp"
          username='mallory shackford'
        /> */}
        {/* StoryReel */}