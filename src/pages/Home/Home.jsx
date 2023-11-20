import MainContainer from "../../Layout/MainContainer";
import Ads from "./Ads";
import Product from "./Product";

const Home = () => {
  return (
    <MainContainer>
      <Ads />

      <Product title={"Trending Product"} />
      <Product title={"Electonic Items"} />
      <Product title={"Laptop Items"} />
    </MainContainer>
  );
};

export default Home;
