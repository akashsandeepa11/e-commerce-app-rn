import { ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getDataFromCollection from "../../Utils/dataFetch/getDataFromCollection";
import Loading from "../../components/Loading/Loading";
import MainContainer from "../../Layout/MainContainer";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  console.log(categoryData);

  useEffect(() => getDataFromCollection("category", setCategoryData), []);

  if (categoryData.length === 0) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <div
        className=" w-full mt-6 p-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <h1 className=" font-bold text-sm text-stone-900">Main Categories</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-[auto] gap-5">
          {categoryData?.map(({ img, title, categoryId }, index) => (
            <CategoryUnitItem
              key={index}
              imageUrl={img}
              title={title}
              categoryId={categoryId}
            />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

const CategoryUnitItem = ({ imageUrl, title, categoryId }) => (
  <Link to={`/category/${categoryId}`}>
    <ListItemButton
      sx={{
        padding: "0",
        margin: "0",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className=" py-6 px-3 w-full rounded-md  flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className=" w-[50px] h-[50px] rounded-full"
        />
        <h2 className=" mt-4 text-[10px] text-black font-bold sm:text-sm">
          {title}
        </h2>
      </div>
    </ListItemButton>
  </Link>
);
export default Category;
