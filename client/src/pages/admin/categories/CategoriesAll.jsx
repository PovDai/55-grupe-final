import { useContext } from "react";
import { AdminCategoriesTable } from "../../../components/admin-categories-table/AdminCategoriesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function AdminCategoriesAllPage() {
    const { adminCategories } = useContext(CategoriesContext);

    return (
        <main>
            <AdminPageTitle title="All categories" />
            <AdminCategoriesTable list={adminCategories} />
        </main>
    );
}