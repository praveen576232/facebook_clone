import React from "react";
import "./Header.css";
import { withStyles } from '@material-ui/core/styles';
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlinedIcon from "@material-ui/icons/Storefront";
import { Avatar, Tooltip, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import {useStateValue} from '../StateProvider/StateProvider'
import {auth} from '../Firebase/firebase'

function Header() {
  const [{user}] = useStateValue();
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      border: '1px solid #dadde9',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    arrow:{
      color: theme.palette.common.white,
   
      
    }
  }))(Tooltip);
const signout =(e)=>{
  e.preventDefault();
  auth.signOut();
}
  return (
    <div className="header">
      <div className="header_left">
        <img
          alt="facebook logo"
          src="data:image/png;base64,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"
        ></img>
        <div className="header_serach">
          <SearchIcon></SearchIcon>
          <input placeholder="Serach Facebook"></input>
        </div>
      </div>
      <div className="header_tabs">
        <div className="header_tab_option header_option-ative">
          <HomeIcon></HomeIcon>
        </div>
        <div className="header_tab_option">
          <FlagIcon></FlagIcon>
        </div>
        <div className="header_tab_option">
          <StorefrontOutlinedIcon></StorefrontOutlinedIcon>
        </div>

        <div className="header_tab_option">
          <SubscriptionsOutlinedIcon></SubscriptionsOutlinedIcon>
        </div>
        <div className="header_tab_option">
          <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
        </div>
      </div>
      <div className="header_right_option">
       <LightTooltip title={
         <div className="tooltip_logout">

     
           <Button onClick={signout} className="tooltip_logout_button">Sign out?</Button>
         </div>
       }
         interactive arrow >
       <Avatar src={user?.photoURL}></Avatar>
       </LightTooltip>
        <p>{user?.displayName}</p>
        <AddIcon></AddIcon>
        <QuestionAnswerIcon></QuestionAnswerIcon>
        <NotificationsActiveIcon></NotificationsActiveIcon>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>
    </div>
  );
}

export default Header;
