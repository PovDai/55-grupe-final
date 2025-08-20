// React ir kitų priklausomybių importavimas
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./CategoriesContext";
import { initialCategoriesContext } from "./initialCategoriesContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env.js";

export function CategoriesContextWrapper(props) {
    const [publicCategories, setPublicCategories] = useState(initialCategoriesContext.publicCategories);
    const [adminCategories, setAdminCategories] = useState(initialCategoriesContext.adminCategories);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicCategories() {
        fetch(SERVER_ADDRESS+'/api/categories', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
        
                if (data.status === 'success') {
                    setPublicCategories(() => data.categories);// atkeliauja is server responto eilutes file src/getCategories.js
                }
            })
            .catch(console.error);
    }

    function updateAdminCategories() {
        fetch(SERVER_ADDRESS+'/api/admin/categories', {
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
    }

    function deletePublicCategory(urlSlug) {
        setPublicCategories(currentList => currentList.filter(category => category.url_slug !== urlSlug));
    }

    function deleteAdminCategory(urlSlug) {
        setAdminCategories(currentList => currentList.filter(category => category.url_slug !== urlSlug));
    }

    function getPublicCategoryByUrlSlug(urlSlug) { // atkeliauja is server api/admin/editCategory.js per useParams.
        return publicCategories.find(category => category.url_slug === urlSlug);
    }

    function getAdminCategoryByUrlSlug(urlSlug) {
        return adminCategories.find(category => category.url_slug === urlSlug);
    }

    function getAdminCategoryById(id) {
        return adminCategories.find(category => category.id === id);
    }

    useEffect(updatePublicCategories, []);
/*useEffect priima du argumentus:
pirmas → funkcija, kurią reikia vykdyti (čia: updatePublicCategories)
antras → priklausomybių masyvas (čia: [])
[] (tuščias masyvas) reiškia, kad efektas bus paleistas tik vieną kartą – po pirmo komponento užkrovimo (mount).
Tai atitinka klasikinį componentDidMount.
Kadangi tu paduodi tiesiai updatePublicCategories (be anoniminės funkcijos), useEffect iškvies ją automatiškai iškart po renderio.*/

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminCategories();
        } else {
            setAdminCategories(() => initialCategoriesContext.adminCategories);
        }
    }, [isLoggedIn]);

    const values = {
        publicCategories,
        adminCategories,
        getPublicCategoryByUrlSlug,
        getAdminCategoryByUrlSlug,
        getAdminCategoryById,
        updatePublicCategories,
        updateAdminCategories,
        deletePublicCategory,
        deleteAdminCategory,
    };

    return (
        <CategoriesContext.Provider value={values}>
            {props.children}
        </CategoriesContext.Provider>
    )
}