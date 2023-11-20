import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const clickHandle = (iconText, clickFun) => {
  const obj = {
    Home: true,
    Category: false,
    Profile: false,
  };
  if (iconText === "Category") {
    obj.Home = false;
    obj.Category = true;
    obj.Profile = false;
  } else if (iconText === "Profile") {
    obj.Home = false;
    obj.Category = false;
    obj.Profile = true;
  }
  clickFun.setWhoIsClick(obj);
};

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });

  return (
    <div className=" z-[100] drop-shadow-header-shadow fixed bottom-0 left-0 w-full bg-my-background flex items-center justify-between p-2 md:justify-start md:gap-5">
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        iconText={"Home"}
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AccountCircleOutlinedIcon}
        iconText={"Category"}
      />
      <div className=" md:flex-1 md:text-right">
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AppsOutlinedIcon}
          iconText={"Profile"}
        />
      </div>
    </div>
  );
};

const FooterIcon = ({ Icon, iconText, clickFun }) => (
  <Link to={iconText === "Home" ? "/" : `/${String(iconText).toLowerCase()}`}>
    <IconButton
      sx={{ padding: "4px", borderRadius: "5px", color: "#c82196" }}
      onClick={() => clickHandle(iconText, clickFun)}
    >
      <div
        className=" text-gray-700 hover:text-[#c82196] transition-all duration-300"
        style={{
          color: clickFun.whoIsClick[iconText] && "#c82196",
        }}
      >
        <Icon />
        <p className=" text-xs font-semibold">{iconText}</p>
      </div>
    </IconButton>
  </Link>
);

export default Footer;
