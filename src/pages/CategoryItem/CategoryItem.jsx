import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/CategorySlice";
import { useParams } from "react-router-dom";
import { ListItemButton, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import getDataFromSubCollection from "../../Utils/dataFetch/getDataFromSubCollection";
import Loading from "../../components/Loading/Loading";
import MainContainer from "../../Layout/MainContainer";

const CategoryItem = () => {
  const category = useSelector(categorySelector);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter(
    (ele) => ele.id === categoryId && ele.title
  );

  const [categoryItemData, setCategoryItemData] = useState([]);

  useEffect(() => {
    getDataFromSubCollection(
      "category",
      categoryId,
      categoryId,
      setCategoryItemData
    );
  }, []);

  console.log("Category Item Data:", categoryItemData);

  if (categoryItemData.length === 0) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <h1 className=" font-bold text-lg md:text-2xl text-stone-900">
        {categoryTitle.title}
      </h1>
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-4">
        {categoryItemData.map(({ img, rating, title }, index) => (
          <CategoryItemUnit
            key={index}
            imageUrl={img}
            rating={rating}
            title={title}
          />
        ))}
      </div>
    </MainContainer>
  );
};

const CategoryItemUnit = ({ imageUrl, title, rating }) => (
  <ListItemButton
    sx={{
      padding: "0",
      margin: "0",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "12px",
    }}
  >
    <div className=" w-full rounded-md  flex flex-col items-center py-2">
      <img
        src={imageUrl}
        alt={title}
        className=" w-full object-contain overflow-hidden"
      />
      <h3 className=" ml-2 text-left font-bold text-sm text-stone-900">
        {title}
      </h3>
      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        size="small"
        readOnly
      />
    </div>
  </ListItemButton>
);

export default CategoryItem;
