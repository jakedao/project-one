import router from "@/configs/router";
import { RouterProvider } from "react-router";
import "./App.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
