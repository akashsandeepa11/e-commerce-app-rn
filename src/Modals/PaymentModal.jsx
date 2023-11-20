import Modal from "@mui/material/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";
import db from "../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

const PaymentModel = (props, ref) => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({ handleOpen: () => setOpen(true) }));

  const addData = () => {
    setDoc(doc(db, "category/category5/category5", "category5_item3"), {
      title: "category1 title 3",
      img: "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
      rating: 3.9,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className=" flex flex-col items-center justify-center"
    >
      <div className=" w-[90%] bg-white">
        {" "}
        Akash
        <button onClick={addData}> Click</button>
      </div>
    </Modal>
  );
};

export default forwardRef(PaymentModel);
