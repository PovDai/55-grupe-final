import { AdminCategoriesTable } from "../../../components/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";

export function AdminCategoriesPublishedPage() {
    return (
        <main>
            <AdminPageTitle title="Published categories" />
            <AdminCategoriesTable />
        </main>
    );
}