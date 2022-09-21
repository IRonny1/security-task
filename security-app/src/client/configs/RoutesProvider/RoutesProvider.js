import { Route, Routes } from "react-router-dom";

import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";

export default function RoutesProvider() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
