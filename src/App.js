import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MainNav from "./component/MainNav";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";
import ProductList from "./component/ProductList";
import LogOut from "./component/LogOut";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
