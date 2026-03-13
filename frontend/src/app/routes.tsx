import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Predict } from "./pages/Predict";
import { PlantInfo } from "./pages/PlantInfo";
import { About } from "./pages/About";
import { PlantDetail } from "./pages/PlantDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "predict", Component: Predict },
      { path: "plants", Component: PlantInfo },
      { path: "plants/:id", Component: PlantDetail },
      { path: "about", Component: About },
    ],
  },
]);
