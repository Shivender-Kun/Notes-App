import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";

const Root = lazy(() => import("./Root"));

const Signup = lazy(() => import("../pages/Signup"));
const Signin = lazy(() => import("../pages/Signin"));
const Notes = lazy(() => import("../pages/Notes"));

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="signup" />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="notes" element={<Notes />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
