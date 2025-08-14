import { useContext } from "react";
import { AdminCategoriesTable } from "../../../components/admin-categories-table/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function AdminCategoriesPublishedPage() {
    const { adminCategories } = useContext(CategoriesContext);

    return (
        <main>
            <AdminPageTitle title="Published categories" />
            <AdminCategoriesTable list={adminCategories.filter(item => item.status_name === 'published')} />
        </main>
    );
}