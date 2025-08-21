import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";
import { SERVER_ADDRESS } from "../../../env.js";

export function AdminNewCategoryPage() {
    return (
        <main>
            <AdminPageTitle title="New category" />

            <div className="container">
                <div className="row">
                    <AdminCategoryForm
                     api={SERVER_ADDRESS + '/api/admin/categories'}
                        method="POST" />
                </div>
            </div>
        </main>
    );
}