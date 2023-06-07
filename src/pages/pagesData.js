
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import BlogCreate from "./BlogCreate";


const pagesData = [
    {
      path: "/login",
      element: <Login />,
      title: "Login",
      index:false
    },
    {
      path: "/",
      element: <Home />,
      title: "Home",
      index:true
    },
    {
      path: "/register",
      element: <Register />,
      title: "Register",
      index:false
    },
    {
      path: "/blog/create",
      element: <BlogCreate />,
      title: "Create New",
      index:false
    }
  ];
  
export default pagesData;