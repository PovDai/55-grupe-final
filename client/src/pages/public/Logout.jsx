import { Link, useNavigate } from "react-router";
import { PublicPageTitle } from "../../components/PublicPageTitle";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function LogoutPage() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(UserContext);

    function handleLogoutClick() {
        logout();

        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Logout" />
            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <div className="col-12">
                                <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                                <button onClick={handleLogoutClick} className="btn btn-primary">Logout</button>
                            </div>
                            : <div className="col-12">
                                <p>Jus jau esate atsijunge nuo sistemos!</p>
                                <Link to='/' className="btn btn-primary">Go home</Link>
                            </div>
                    }
                </div>
            </div>
        </main>
    );
}

