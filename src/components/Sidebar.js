import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Link } from "react-router-dom";
import { auth } from "../Firebase";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLogo>
        <TrendingUpIcon />
      </SidebarLogo>
      <SidebarOptions>
        <Link to="/">
          <SidebarOption Icon={HomeIcon} />
        </Link>

        <Link to="/StockList">
          <SidebarOption Icon={TimelineIcon} />
        </Link>

        <Link to="/Watchlist">
          <SidebarOption Icon={VisibilityIcon} />
        </Link>

        <Link to="/Orders">
          <SidebarOption Icon={FormatListBulletedIcon} />
        </Link>

        <SidebarOption Icon={ExitToAppIcon} onClick={() => auth.signOut()} />
      </SidebarOptions>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--main-color2);
  color: white;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarLogo = styled.div`
  padding: 5px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin-top: 10px;
  > .MuiSvgIcon-root {
    color: var(--sub-color2);
    font-size: 38px;
    transition: 0.5s;
    background-color: var(--logo-color);
    border-radius: 99px;
    padding: 4px;
  }
`;

const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--sub-color2);
  height: 30%;
`;
