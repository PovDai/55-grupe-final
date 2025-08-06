import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminMovieForm } from "../../../components/forms/AdminMovieForm";

export function AdminNewMoviePage() {
    return (
          <main>
            <AdminPageTitle title="New category" />

            <div className="container">
                <div className="row">
                    <AdminMovieForm />
                </div>
            </div>
        </main>
    );
}

