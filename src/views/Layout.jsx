import { Outlet } from "react-router-dom";
// useLoaderData
import Nav from "../Nav";

function Layout() {
    // const movies = useLoaderData()/
    return <>

        <div className="container-fluid main-bg-color">
            <Nav />
            <Outlet ></Outlet>
        </div>
    </>
}

export default Layout;