import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className=" w-screen h-screen px-5 py-[100px] sm:px-12 md:px-[120px] overflow-y-scroll">
      {children}
    </div>
  );
};

export default MainContainer;
