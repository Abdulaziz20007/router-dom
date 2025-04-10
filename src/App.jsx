import { Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <Routes>
          <Route path="/" index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
