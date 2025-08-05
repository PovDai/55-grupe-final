import { RegisterForm } from "../../components/forms/RegisterForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function RegisterPage() {
    return (
        <main className="min-page-height">
            <PublicPageTitle title="Register" />

            <div className="container">
                <div className="row">
                    <RegisterForm />
                </div>
            </div>
        </main>
    );
}