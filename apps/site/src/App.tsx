import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComponentsIndex from "./pages/ComponentsIndex";
import ComponentPage from "./pages/ComponentPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsIndex />} />
        <Route path="/components/:slug" element={<ComponentPage />} />
      </Routes>
    </Layout>
  );
}
