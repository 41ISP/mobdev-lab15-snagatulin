import {createBrowserRouter} from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Layout from "../components/Layout"
import Logout from "../pages/Logout"
import SpicokOfTovar from "../pages/ListOfTovar"
import DetailOfTovar from "../components/DetailOfTovar"
import CreateProductPage from "../components/CreateTovar"

export const router = createBrowserRouter([
{
   path: "/signup",
   element: <SignUp/>
},
{
    path: "/signin",
    element: <SignIn/>
},

{
   path: "/logout",
   element: <Logout/>
},

{
    path: "/",
    element: <Layout/>,
    children: [ { index:true, element:<SpicokOfTovar/>} ]
},

{
    path: "/detailsoftovar",
    element: <DetailOfTovar/>
},
{
    path: "/createtovar",
    element: <CreateProductPage/>
}




])