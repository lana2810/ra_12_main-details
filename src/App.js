import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ServiceList from "./components/ServiceList";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ServiceList />} />
        <Route path=":id/details" element={<ServiceDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
