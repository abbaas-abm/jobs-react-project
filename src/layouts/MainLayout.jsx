import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <ToastContainer  />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout