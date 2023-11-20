import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const adElement = [
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
  },
];

const Ads = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className=" rounded-lg overflow-hidden"
    >
      {adElement.map(({ imageUrl }, index) => (
        <SwiperSlide key={index}>
          <AdUnit imageUrl={imageUrl} id={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const AdUnit = ({ imageUrl, id }) => (
  <img
    src={imageUrl}
    alt={`ad${id}`}
    className=" w-screen object-contain rounded-lg"
  />
);

export default Ads;
