import { Outlet } from "react-router-dom"
import MainPage from "./MainPage"

const Layout = () => {
    return (
        <div className="container">
            <MainPage/>
            <Outlet />
        </div>
    )
}

export default Layout