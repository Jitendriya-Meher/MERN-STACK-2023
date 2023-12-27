import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Logout from "./pages/Logout";
import Admin_Layout from "./components/layouts/Admin_Layout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";

function App() {
  return (
    <div className="">

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

        // nested routes
        <Route path="/admin" element={<Admin_Layout></Admin_Layout>}>

          <Route path="users" element={<AdminUsers></AdminUsers>}></Route>
          <Route path="contacts" element={<AdminContacts/>}></Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
