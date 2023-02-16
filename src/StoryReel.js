import React from 'react';
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
  return (
    <div className="storyReel">
     <Story image="https://images.pexels.com/photos/10743787/pexels-photo-10743787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://avatars.githubusercontent.com/u/93612680?v=4"
            title="Mallory Shackford"
            />
     <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg7PM9QNjmtse4iUjotuglt-3grC5HRJfQg&usqp=CAU"
            profileSrc="https://avatars.githubusercontent.com/u/20469909?v=4"
            title="Anh Nguyen" 
            />
     <Story image="https://images.pexels.com/photos/10767883/pexels-photo-10767883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://avatars.githubusercontent.com/u/19764585?v=4"
            title="Deepa Manian" 
            />
     <Story image="https://images.pexels.com/videos/4678261/pexels-photo-4678261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://avatars.githubusercontent.com/u/54859940?s=200&v=4"
            title="Aaron Beech" 
            />
     <Story image="https://images.pexels.com/photos/5635101/pexels-photo-5635101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
            title="Joey Clemens" 
            />
     
    </div>
  )
}

export default StoryReel