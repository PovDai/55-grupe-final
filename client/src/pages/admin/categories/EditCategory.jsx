import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { AdminCategoryForm } from "../../../components/forms/AdminCategoryForm";
import { CategoriesContext } from "../../../context/categories/CategoriesContext";
import { useParams } from "react-router";

export function AdminEditCategoryPage() {
    const { getAdminCategoryByUrlSlug } = useContext(CategoriesContext);
    const { category } = useParams();

    const categoryData = getAdminCategoryByUrlSlug(category);

    return (
        <main>
            <AdminPageTitle title={`Edit category: "${category}"`} />

            <div className="container">
                <div className="row">
                    {
                        categoryData
                            ? <AdminCategoryForm
                                api={"http://localhost:5519/api/admin/categories/" + categoryData.url_slug}
                                method="PUT"
                                category={categoryData} />
                            : (
                                <div className="col-12 col-md-9 mt-5">
                                    <Alert text='Norima kategorija nerasta, todel redagavimas yra neimanomas.' />
                                </div>
                            )
                    }
                </div>
            </div>
        </main>
    );
}