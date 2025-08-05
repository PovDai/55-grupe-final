import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";

export function AdminEditCategoryPage() {
    return (
        <main>
            <AdminPageTitle title="Edit category" />

            <div className="container">
                <div className="row">
                    <AdminCategoryForm />
                </div>
            </div>
        </main>
    );
}