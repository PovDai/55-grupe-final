import { Link } from "react-router";

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link px-2 text-body-secondary">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link px-2 text-body-secondary">Categories</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}