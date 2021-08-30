import React from "react";
import "../styles/Header.css";
import { HeaderOption } from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NotificationsIcon from "@material-ui/icons/Notifications";
export const HeaderRight = () => {
  return (
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Ana Sayfa" />
      <HeaderOption Icon={SupervisorAccountIcon} title="Ağım" />
      <HeaderOption Icon={WorkIcon} title="İş İlanları" />
      <HeaderOption Icon={InsertCommentIcon} title="Mesajlaşma" />
      <HeaderOption Icon={NotificationsIcon} title="Bildirimler" />
      <HeaderOption
        avatar="https://enesaliovur.github.io/assets/css/images/userprofile.jpeg"
        title="Ben"
      />
      {/* <HeaderOption title='Mesajlaşma' />
      <HeaderOption title='Bildirimler' />
      <HeaderOption title='Ben' /> */}
    </div>
  );
};
