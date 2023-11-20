import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import db, { auth } from "../../Firebase/Firebase";
import { addUser } from "../../Store/ReduxSlice/UserSlice";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const fun = () => {
      const user = auth.currentUser;

      if (user) {
        console.log(user);
      } else {
        console.log("No user");
      }
    };

    // fun();

    setTimeout(() => {
      console.log("Time out");
      fun();
    }, 100);
  }, []);

  const loginSubmit = () => {
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // const q = query(collection(db, "users"), where("username", "==", "admin"));

    // getDocs(q)
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //       dispatch(addUser(doc.data()));
    //     });

    //     navigate("/admin");
    //   })
    //   .catch((error) => {
    //     console.log("Error getting documents: ", error);
    //   });
  };

  return (
    <div>
      <input ref={usernameRef} placeholder="username" type="email" />
      <br />
      <input ref={passwordRef} placeholder="password" type="password" />
      <br />
      <button onClick={loginSubmit}>Login</button>
      <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              alert("User sign out");
            })
            .catch((error) => {
              // An error happened.
              alert(error.message);
            });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
