import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const IndexSteps = lazy(() => import("./pages/steps/indexSteps/IndexSteps"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<IndexSteps />} />
          <Route path="/*" element={<IndexSteps />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
