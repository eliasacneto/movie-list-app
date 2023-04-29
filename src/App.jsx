import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.scss";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
