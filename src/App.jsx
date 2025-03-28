
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { getAccountAPI } from "./services/api.service";

const App = () => {
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    fetchUserAPI();
  }, [])

  const fetchUserAPI = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log("check user:", res.data)
    }
  }


  return (
    <>
      {/* <ParentsComponent>
        <ChildrenComponent />
      </ParentsComponent> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
