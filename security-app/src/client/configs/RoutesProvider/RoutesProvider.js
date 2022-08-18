import { Route, Routes } from "react-router-dom";

import Login from "../../pages/Login/Login";

export default function RoutesProvider() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
