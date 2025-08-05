import { AdminCategoriesTable } from "../../../components/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";

export function AdminCategoriesAllPage() {
    return (
        <main>
            <AdminPageTitle title="All categories" />
            <AdminCategoriesTable />
        </main>
    );
}