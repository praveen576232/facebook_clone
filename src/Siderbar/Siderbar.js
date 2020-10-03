import React from 'react'
import './Siderbar.css'
import { Avatar } from '@material-ui/core'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../StateProvider/StateProvider'
function Siderbar() {
    const [{user}] =useStateValue();
    return (
        <div className="siderbar">
            <div className="siderbar__option">
                <Avatar src={user?.photoURL}></Avatar>
                <h4>{user?.displayName}</h4>
            </div>
            <div className="siderbar__option">
                <LocalHospitalIcon></LocalHospitalIcon>
                <h4>COVID-19 Information Center</h4>
            </div>
            <div className="siderbar__option">
               <EmojiFlagsIcon></EmojiFlagsIcon>
                <h4>Pages</h4>
            </div>
            <div className="siderbar__option">
               <ChatIcon></ChatIcon>
                <h4>Messanger</h4>
            </div>
            <div className="siderbar__option">
               <StorefrontIcon></StorefrontIcon>
                <h4>Marketplace</h4>
            </div>
            <div className="siderbar__option">
               <VideoLibraryIcon></VideoLibraryIcon>
                <h4>Videos</h4>
            </div>
            <div className="siderbar__option">
               <ExpandMoreIcon></ExpandMoreIcon>
                <h4>Marketplace</h4>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Siderbar
