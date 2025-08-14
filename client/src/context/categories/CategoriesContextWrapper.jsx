import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./CategoriesContext";
import { initialCategoriesContext } from "./initialCategoriesContext";
import { UserContext } from "../user/UserContext";

export function CategoriesContextWrapper(props) {
    const [publicCategories, setPublicCategories] = useState(initialCategoriesContext.publicCategories);
    const [adminCategories, setAdminCategories] = useState(initialCategoriesContext.adminCategories);

    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5519/api/categories', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicCategories(() => data.categories);
                }
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetch('http://localhost:5519/api/admin/categories', {
                method: 'GET',
                credentials: 'include',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        setAdminCategories(() => data.categories);
                    }
                })
                .catch(console.error);
        } else {
            setAdminCategories(() => initialCategoriesContext.adminCategories);
        }
    }, [isLoggedIn]);

    function getPublicCategoryByUrlSlug(url) {
        return publicCategories.find(cat => cat.url_slug === url);
    }

    function getAdminCategoryByUrlSlug(url) {
        return adminCategories.find(cat => cat.url_slug === url);
    }

    const values = {
        publicCategories,
        adminCategories,
        getPublicCategoryByUrlSlug,
        getAdminCategoryByUrlSlug,
    };

    return (
        <CategoriesContext.Provider value={values}>
            {props.children}
        </CategoriesContext.Provider>
    )
}