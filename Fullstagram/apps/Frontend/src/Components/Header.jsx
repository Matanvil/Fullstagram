import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import UserPopover from '../Components/UserPopover'
import logo from "../assets/Logo-Black.png";
import { Link } from "react-router-dom";
import "../Dist/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="main-site-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Main-Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="navigation-bar">
        <Link to="/">
          <HomeOutlinedIcon />
        </Link>
        <Link to="/inbox">
          <SendOutlinedIcon />
        </Link>
        <Link to="/create/select-image">
          <AddCircleOutlineRoundedIcon />
        </Link>
        <ExploreOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <UserPopover />
      </div>
    </div>
  );
};

export default Header;
