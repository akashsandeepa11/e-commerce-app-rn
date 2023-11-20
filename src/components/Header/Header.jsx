import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

let clicked = false;

const Header = ({ paymentModalRef }) => {
  // const [isSearch, setIsSearch] = useState();

  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchBoxContainerRef = useRef();

  const searchButtonClickHandle = () => {
    if (clicked) {
      logoRef.current.style = "display: none";
      searchBoxRef.current.style = "display: inline-block";
      searchBoxContainerRef.current.style.backgroundColor = "#fdf6f6";
    } else {
      logoRef.current.style = "display: inline-block";
      searchBoxRef.current.style = "display: none";
      searchBoxContainerRef.current.style.backgroundColor = "inherit";
    }
  };

  return (
    <header className=" z-[100] drop-shadow-header-shadow fixed top-0 left-0 w-full bg-my-background flex items-center justify-between p-2">
      {/* header left */}
      <div className=" flex items-center ">
        <IconButton sx={{ color: "#c82196" }}>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1
          ref={logoRef}
          className=" ml-2 text-sm font-bold"
          style={{
            display: clicked ? "none" : "inline-block",
          }}
        >
          AUK<span className="text-[#c82196]">DEV</span>
        </h1>
        <div
          ref={searchBoxContainerRef}
          className=" transition-all duration-300 ease-in-out overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf6f6]"
          style={{
            backgroundColor: window.innerWidth < 640 ? "inherit" : "#fdf6f6",
          }}
        >
          <input
            ref={searchBoxRef}
            placeholder="Search"
            type="text"
            style={{
              display: window.innerWidth < 640 ? "none" : "inline-block",
            }}
            className=" hidden sm:inline-block ml-1 bg-inherit p-2 outline-none font-semibold text-sm w-[200px]"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                clicked = !clicked;
                searchButtonClickHandle();
              }
            }}
          >
            <SearchIcon className="  text-gray-600" />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton onClick={() => paymentModalRef.current.handleOpen()}>
        <div className=" relative p-1 rounded-full">
          <ShoppingCartOutlinedIcon className=" text-black" />
          <div className=" absolute top-[3px] right-0 text-[7px] text-white bg-black rounded-full p-1 flex items-center justify-center font-semibold w-3 h-3">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
