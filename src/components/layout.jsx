import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import {useEffect} from 'react'
const Layout = () => {
    useEffect(() => {
        document.querySelector("body").classList.add("wrapper");
        return () => {
          document.querySelector("body").classList.remove("wrapper");
        };
      }, []);
    
    return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;