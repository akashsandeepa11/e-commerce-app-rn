import { IconButton } from "@mui/material";
import { useRef } from "react";
import MainContainer from "../../Layout/MainContainer";

const itemImageArr = [
  "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
  "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImagesRef = useRef([]);

  return (
    <MainContainer>
      <h1 className=" text-lg font-bold px-3 mb-7">ItemPage</h1>
      <img
        ref={mainImageRef}
        src={itemImageArr[0]}
        alt="main item"
        className=" w-full object-contain rounded-md"
      />
      <div className=" w-full mt-5 text-center grid grid-cols-4 grid-rows-1 gap-3">
        {itemImageArr.map((ele, index) => (
          <IconButton
            key={index}
            sx={{ padding: "0", borderRadius: "2px" }}
            onClick={() => {
              subImagesRef.current[index].style.border = "3px solid gold";
              mainImageRef.current.src = subImagesRef.current[index].src;
              for (let i = 0; i < itemImageArr.length; i++) {
                console.log(i);
                if (i !== index) {
                  subImagesRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImagesRef.current[index] = refEle)}
              name={`item image ref: ${index}`}
              src={ele}
              alt={ele}
              className=" w-full object-contain rounded-md"
            />
          </IconButton>
        ))}
      </div>
    </MainContainer>
  );
};

export default ItemPage;
