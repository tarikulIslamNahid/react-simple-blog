import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element,index }) => {
      return <Route key={title} index={index} path={`/${path}`} element={element} />;
    });
  
    return <Routes>{pageRoutes}</Routes>;
  };
  
  export default Router;