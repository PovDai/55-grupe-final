import { AdminCategoriesTable } from "../../../components/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";

export function AdminCategoriesDraftPage() {
    return (
        <main>
            <AdminPageTitle title="Draft categories" />
            <AdminCategoriesTable />
        </main>
    );
}