import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
