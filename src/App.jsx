
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {

  // const ParentsComponent = (props) => {
  //   return (
  //     <>
  //       <div>Parent component</div>
  //       {props.children}
  //     </>
  //   )
  // }

  // const ChildrenComponent = (props) => {
  //   return (
  //     <>
  //       <div>Children component</div>
  //     </>
  //   )
  // }

  // {key: value}
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
