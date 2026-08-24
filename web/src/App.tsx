import { Routes, Route } from "react-router-dom";
import { DocsShell } from "./components/layout/docs-shell";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Installation from "./pages/installation";
import ComponentsOverview from "./pages/components-overview";
import ComponentPage from "./pages/component-page";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/docs/*"
        element={
          <DocsShell>
            <Routes>
              <Route path="introduction" element={<Introduction />} />
              <Route path="installation" element={<Installation />} />
              <Route path="components" element={<ComponentsOverview />} />
              <Route path="components/:slug" element={<ComponentPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DocsShell>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
