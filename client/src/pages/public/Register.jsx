import { Link } from "react-router";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function RegisterPage() {
    const isLoggedIn = true;

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Register" />

            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <>
                                <p>Einamuoju metu prie sistemos prisijunge vartotojai negali registruoti kitos paskyros. Noredami ta atlikti - atsijunkite nuo dabartines paskyros.</p>
                                <div className="d-flex gap-3">
                                    <Link to='/logout' className="btn btn-primary">Logout</Link>
                                    or
                                    <Link to='/admin' className="btn btn-primary">Go to dashboard</Link>
                                </div>
                            </>
                            : <RegisterForm />
                    }
                </div>
            </div>
        </main>
    );
}