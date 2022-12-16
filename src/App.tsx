import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./app/components/error-boundary";
import "./app.css";

const SearchPage = React.lazy(() => import("./search"));
const SearchProvider = React.lazy(() => import("./search/resources/context"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SearchProvider>
          <SearchPage />
        </SearchProvider>
      ),
    },
  ]);
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
