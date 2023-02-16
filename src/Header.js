import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
    <div className="header_left">
        <img 
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" 
         alt="" />
         <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
         </div>
    </div>

    <div className="header_center">
      <div className="header_option header_option--active">
        <HomeIcon />
      </div>
      <div className="header_option">
        <SubscriptionsOutlinedIcon />
      </div>
      <div className="header_option">
        <StorefrontOutlinedIcon />
      </div>
      <div className="header_option">
        <GroupsRoundedIcon />
      </div>
    </div>

    <div className="header_right">
      <div className="header_info">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>

      <IconButton>
        <AppsRoundedIcon />
      </IconButton>
       <IconButton>
        <ForumRoundedIcon />
      </IconButton>
       <IconButton>
        <NotificationsActiveRoundedIcon />
      </IconButton>
       <IconButton>
        <ExpandMoreRoundedIcon />
      </IconButton>
      
    </div>
    </div>
  )
}

export default Header