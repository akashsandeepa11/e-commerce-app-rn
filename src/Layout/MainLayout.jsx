import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import { useRef, useState } from "react";
import PaymentModal from "../Modals/PaymentModal";

const MainLayout = () => {
  const [IsLoading, setIsLoading] = useState(false);

  const paymentModalRef = useRef();

  if (IsLoading) {
    return <Loading />;
  } else {
    return (
      <div className=" overflow-hidden h-screen w-screen ">
        <PaymentModal ref={paymentModalRef} />
        <Header paymentModalRef={paymentModalRef} />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default MainLayout;
