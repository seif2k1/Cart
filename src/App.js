import {  Routes, Route } from "react-router-dom";
import Card from "./component/Card";
import Products from "./component/App";

function app () {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
          <Route path="card" element={<Card />} />
      </Routes>
    </div>
  );
}
export default app;