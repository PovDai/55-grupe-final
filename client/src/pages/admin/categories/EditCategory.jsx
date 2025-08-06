import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";

export function AdminEditCategoryPage() {
    const category = {
        title: 'Action',
        url: 'action',
        description: 'Very action, much movie',
        status: 'published',
    };

    return (
        <main>
            <AdminPageTitle title="Edit category" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        <Alert text='Norima kategorija nerasta, todel redagavimas yra neimanomas.' />
                    </div>
                    <AdminCategoryForm category={category} />
                </div>
            </div>
        </main>
    );
}