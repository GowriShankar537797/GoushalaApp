import { GoushalaForm, Home } from "Views/Pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/form",
    element: <GoushalaForm />,
  },
]);

export default router;
