import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
  <div className="sidebar">
    <SidebarRow src={user.photoURL}
                title={user.displayName}

                />
    <SidebarRow Icon={GroupRoundedIcon} title='Friends' />
    <SidebarRow Icon={GroupOutlinedIcon} title='Groups' />
    <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
    <SidebarRow Icon={VideoLibraryIcon} title='Watch' />
    <SidebarRow Icon={WatchLaterOutlinedIcon} title='Memories' />
    <SidebarRow Icon={BookmarkRoundedIcon} title='Saved' />
    <SidebarRow Icon={ExpandMoreOutlinedIcon} title='See More' />
       
    </div>
  );
}

export default Sidebar