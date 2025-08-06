import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";

export function AdminEditCategoryPage() {

    const category = {
        title: 'Action',
        url: 'action',
        description: 'Very action muvie',
        status:'published',
    }
    return (
        <main>
            <AdminPageTitle title="Edit category" />

            <div className="container">
                <div className="row">
                    <AdminCategoryForm
                      category={category}
                    
                    
                    />
                </div>
            </div>
        </main>
    );
}