import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Sidebar.css";
import GroupIcon from "@material-ui/icons/Group";
export const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      {/* <span className="sidebar__hash">#</span> */}
      <span className="sidebar__hash">
        <GroupIcon fontSize="small" />
      </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/25.01.2020/oresim/syncfade-renkli-arka-plan-masaustu-resmi.jpg"
          alt=""
        />
        <Avatar
          src="https://enesaliovur.github.io/assets/css/images/userprofile.jpeg"
          className="sidebar__avatar"
        />
        <h2>Enes Ali Övür</h2>
        <h4>KLU|Software Engineering AU|Social Media Management</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profilinizi kimler görüntüledi</p>
          <p className="sidebar__statNumber">62</p>
        </div>
        <div className="sidebar__stat">
          <p>Yayınınız için görüntüleme</p>
          <p className="sidebar__statNumber">656</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>En Yeni</p>
        {recentItem("React Native Jobs")}
        {recentItem("React Native")}
      </div>
    </div>
  );
};
