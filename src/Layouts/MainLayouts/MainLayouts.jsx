import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router";
import { useRouteLoading } from "../../utils/useRouteLoading";
import Loading from "../../Components/Loading";

const MainLayouts = () => {
  const loading = useRouteLoading(2000);
  return (
    <div>
      <Navbar></Navbar>
      {loading && <Loading></Loading>}
      <main className="flex flex-col min-h-screen px-4 py-8 container mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
