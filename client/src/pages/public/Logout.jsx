import { Link } from "react-router";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LogoutPage() {
    const isLoggedIn = false;

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Logout" />
            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <div className="col-12">
                                <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                                <button className="btn btn-primary">Logout</button>
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