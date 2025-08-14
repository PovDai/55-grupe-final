import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";

export function AdminNewCategoryPage() {
    return (
        <main>
            <AdminPageTitle title="New category" />

            <div className="container">
                <div className="row">
                    <AdminCategoryForm
                        api="http://localhost:5519/api/admin/categories"
                        method="POST" />
                </div>
            </div>
        </main>
    );
}