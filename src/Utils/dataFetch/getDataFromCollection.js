import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/Firebase";

const dbData = {};

const getDataFromCollection = (collectionName, setFunction) => {
  if (dbData[collectionName] && dbData[collectionName].length > 0) {
    setFunction(dbData[collectionName]);
  } else {
    getDocs(collection(db, collectionName)).then((querySnapshot) => {
      console.log("data read from db");
      const dataArr = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataArr.push({ ...doc.data(), categoryId: doc.id });
      });
      dbData[collectionName] = dataArr;
      setFunction(dataArr);
    });
  }
};

export default getDataFromCollection;
