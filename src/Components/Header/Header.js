import React from "react";

import "./Header.scss";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon className="time_icon" />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Search Flack" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
