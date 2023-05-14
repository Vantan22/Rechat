import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout";
import LoginPage from "./Pages/Login/LoginPage";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
function App() {
  return (
    <Routes>
      {/* <Route index element={<HomeLayout />}></Route> */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
