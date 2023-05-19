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
import HostVanDetails from "./pages/hosts/HostVanDetails";
import HostVanList from "./pages/hosts/HostVanList";
import VanDetail from "./pages/hosts/VanDetail";
import Error from "./components/ui/Error";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={vanDetailLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route
          loader={async () => {
            return null;
          }}
          index
          element={<DashBoard />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="income"
          element={<Income />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="reviews"
          element={<Reviews />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="vans"
          element={<HostVanList />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="vans/:id"
          element={<HostVanDetails />}
        >
          <Route
            loader={async () => {
              return null;
            }}
            index
            element={<VanDetail />}
          />
          <Route
            loader={async () => {
              return null;
            }}
            path="pricing"
            element={<HostPrice />}
          />
          <Route
            loader={async () => {
              return null;
            }}
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
