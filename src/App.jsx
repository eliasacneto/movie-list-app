import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./views/Home/Home";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)} />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home searchValueProp={searchValue} />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
