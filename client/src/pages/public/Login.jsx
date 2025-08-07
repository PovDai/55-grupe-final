import { Link } from "react-router";
import { LoginForm } from "../../components/forms/LoginForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LoginPage() {
    const isLoggedIn = false;

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Login" />

            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <>
                                <p>Einamuoju metu prie sistemos prisijunge vartotojai negali prisijungti prie kitos paskyros. Noredami ta atlikti - atsijunkite nuo dabartines paskyros.</p>
                                <div className="d-flex gap-3">
                                    <Link to='/logout' className="btn btn-primary">Logout</Link>
                                    or
                                    <Link to='/admin' className="btn btn-primary">Go to dashboard</Link>
                                </div>
                            </>
                            : <LoginForm />
                    }
                </div>
            </div>
        </main>
    );
}