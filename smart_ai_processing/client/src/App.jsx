import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Routes, Route } from "react-router-dom";
import DownloadProgress from "./pages/DownloadProgress";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="downloads" element={<DownloadProgress />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
