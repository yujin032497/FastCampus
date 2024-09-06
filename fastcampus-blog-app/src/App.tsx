import { useEffect, useState } from "react";
import { app, db } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";
import Loader from "components/Loader";

function App() {
  //console.log(db);
  const auth = getAuth(app);
  // auth를 체크하기 전에 (initialize 전) 에는 loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);
  // console.log(auth);
  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a alist of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setIsAuthenticated(true);
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;
