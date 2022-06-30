import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllProduct from "./components/AllProduct/AllProduct";
import Header from "./components/Header";
import Single from "./components/Single";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="py-3">
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/item/:id" element={<Single />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
