import { LoginForm } from "../../components/forms/LoginForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LoginPage() {
    return (
        <main className="min-page-height">
            <PublicPageTitle title="Login" />

            <div className="container">
                <div className="row">
                    <LoginForm />
                </div>
            </div>
        </main>
    );
}