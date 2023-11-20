import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { IconButton } from "@mui/material";
import "./style.css";

const productArr = [
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle:
      "product title qqqqqqqqqqqef,jHKJNCSKJNCNKLCXMLKNCXJNCXZNXKCNKCZNXJKCZNJLKJCSJCN,KJCZ,N,C",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    price: 100,
    productTitle: "product title",
  },
];

const Product = ({ title }) => {
  return (
    <section
      className=" w-full mt-6 p-2"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <h1 className=" w-full font-bold mb-3">{title}</h1>
      <Swiper
        mousewheel={true}
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Mousewheel, Autoplay]}
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton sx={{ padding: "4px", borderRadius: "5px", color: "red" }}>
    <div className=" w-ful mb-7 text-left">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className=" w-full object-contain overflow-hidden"
      />
      <h3 className=" font-bold text-xs text-stone-900 sm:text-sm md:text-lg">
        {String(productTitle).substring(0, 24)}
        {productTitle.length > 25 && "..."}
      </h3>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        size="small"
        readOnly
      />
      <h3 className=" font-semibold text-stone-900 text-lg">Rs.{price}/-</h3>
    </div>
  </IconButton>
);

export default Product;
