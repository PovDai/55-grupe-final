import { Link, NavLink } from "react-router";
import logo from '../assets/react.svg';

export function Header() {
    const isLoggedIn = true;

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={logo} height={32} alt="Logo" />
                </Link>
            </div>
            <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <NavLink to='/' className="nav-link px-2">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/movies' className="nav-link px-2">Movies</NavLink>
                </li>
                <li>
                    <NavLink to='/categories' className="nav-link px-2">Categories</NavLink>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                {isLoggedIn ? (
                    <>
                        <Link to="/admin" className="btn btn-primary">Dashboard</Link>
                        <Link to="/logout" className="btn">Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                        <Link to="/login" className="btn">Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}