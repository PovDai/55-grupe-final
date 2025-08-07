import { Link, useNavigate } from "react-router"; // Pakeistas į react-router-dom
import { PublicPageTitle } from "../../components/PublicPageTitle";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function LogoutPage() {
    const { isLoggedIn, logout } = useContext(UserContext);
    const navigate = useNavigate(); // Sukuriame navigate funkciją

    const handleClick = () => {
        logout(); // Iškviečiame logout funkciją iš konteksto
        navigate('/login'); // Nukreipiame į login puslapį
    };

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Logout" />
            <div className="container">
                <div className="row">
                    {isLoggedIn ? (
                        <div className="col-12">
                            <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                            <button 
                                onClick={handleClick} // Pataisytas onClick kvietimas
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="col-12">
                            <p>Jūs jau esate atsijungęs nuo sistemos!</p>
                            <Link to="/" className="btn btn-primary">
                                Go home
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}