import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, { loader as vanDetailLoader } from "./pages/vans/VanDetails";
import Layout from "./components/layout/Layout";
import DashBoard from "./pages/hosts/DashBoard";
import Income from "./pages/hosts/Income";
import Reviews from "./pages/hosts/Reviews";
import HostLayout from "./components/layout/HostLayout";
import HostPrice from "./pages/hosts/HostPrice";
import HostPhoto from "./pages/hosts/HostPhoto";
import HostVanDetails, { loader } from "./pages/hosts/HostVanDetails";
import HostVanList from "./pages/hosts/HostVanList";
import VanDetail from "./pages/hosts/VanDetail";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import { requireAuth } from "./utils/util";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route
        errorElement={<Error />}
        path="vans"
        element={<Vans />}
        loader={vansLoader}
      />
      <Route
        errorElement={<Error />}
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<DashBoard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          errorElement={<Error />}
          loader={async ({ request }) => await requireAuth(request)}
          path="income"
          element={<Income />}
        />
        <Route
          errorElement={<Error />}
          loader={async ({ request }) => await requireAuth(request)}
          path="reviews"
          element={<Reviews />}
        />
        <Route
          errorElement={<Error />}
          loader={async ({ request }) => await requireAuth(request)}
          path="vans"
          element={<HostVanList />}
        />
        <Route
          errorElement={<Error />}
          loader={loader}
          path="vans/:id"
          element={<HostVanDetails />}
        >
          <Route
            loader={async ({ request }) => await requireAuth(request)}
            index
            element={<VanDetail />}
          />
          <Route
            loader={async ({ request }) => await requireAuth(request)}
            path="pricing"
            element={<HostPrice />}
          />
          <Route
            loader={async ({ request }) => await requireAuth(request)}
            path="photos"
            element={<HostPhoto />}
          />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
