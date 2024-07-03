import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";

export const LayoutMain = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Outlet />
    </div>
  );
};
