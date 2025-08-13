import { useEffect, useState } from "react";
import { CategoriesContext } from "./CategoriesContext";
import { initialCategoriesContext } from "./initialCategoriesContext";

// Komponentas, kuris apgaubia dalį aplikacijos ir teikia kategorijų duomenis
export function CategoriesContextWrapper(props) {
    // Būsenos kintamieji:
    // publicCategories - viešos kategorijos (matomos visiems vartotojams)
    // adminCategories - admin kategorijos (matomos tik prisijungusiems administratoriams)
    const [publicCategories, setPublicCategories] = useState(initialCategoriesContext.publicCategories);
    const [adminCategories, setAdminCategories] = useState(initialCategoriesContext.adminCategories);

    // Efektas, vykdomas tik pirmą kartą užkrovus komponentą (mount)
    // Gauna viešąsias kategorijas iš serverio
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

    // Užkomentuotas efektas admin kategorijų gavimui
    // Įjungus jis siųstų užklausą su credentials (reikalingi autentifikacijai)
    /*
    useEffect(() => {
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
    }, []);
    */

    // Objektas su visomis reikšmėmis, kurias norime pasidalinti per kontekstą
    const values = {
        publicCategories,
        adminCategories,
    };

    // Grąžinamas konteksto tiekėjas su reikšmėmis ir vaikais (child components)
    return (
        <CategoriesContext.Provider value={values}>
            {props.children}
        </CategoriesContext.Provider>
    )
}
