import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="d-flex w-100 align-items-center mb-4 ">
            <h1 className="ms-5 me-5 mt-4 text-white col-2">Anonime</h1>
            <div className="d-flex col-6 ">
                <p className="ms-5 mt-5 fs-4 text-color"><NavLink to="/" className="text-decoration-none text-color">Home</NavLink></p>
                <p className="ms-5 mt-5 fs-4 text-color">List anime</p>
            </div>
            <input className="mt-4  p-2 ps-3 col-3 fs-5 border-0 rounded-pill input-bg-color text-color "
                type="text"
                placeholder="Search anime or movie" />
        </nav>
    )
}
export default Nav