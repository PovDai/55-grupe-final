// React ir kitų priklausomybių importavimas
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./CategoriesContext";
import { initialCategoriesContext } from "./initialCategoriesContext";
import { UserContext } from "../user/UserContext";

// Pagrindinė konteksto komponento funkcija
export function CategoriesContextWrapper(props) {
    /*
     * Būsenos kintamieji:
     * publicCategories - kategorijos, matomos visiems vartotojams
     * adminCategories - kategorijos, matomos tik adminui (prisijungusiems vartotojams)
     * Pradinės reikšmės paimamos iš initialCategoriesContext
     */
    const [publicCategories, setPublicCategories] = useState(initialCategoriesContext.publicCategories);
    const [adminCategories, setAdminCategories] = useState(initialCategoriesContext.adminCategories);

    // UserContext naudojamas patikrinti, ar vartotojas yra prisijungęs
    const { isLoggedIn } = useContext(UserContext);

    /*
     * Funkcija atnaujinanti viešas kategorijas
     * Siunčia GET užklausą į serverį ir atnaujina publicCategories būseną
     */
    function updatePublicCategories() {
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
    }

    /*
     * Funkcija atnaujinanti admin kategorijas
     * Siunčia GET užklausą su credentials (reikalinga autentifikacijai)
     * Atnaujina adminCategories būseną
     */
    function updateAdminCategories() {
        fetch('http://localhost:5519/api/admin/categories', {
            method: 'GET',
            credentials: 'include', // Įtraukia slapukus/autorizacijos duomenis
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminCategories(() => data.categories);
                }
            })
            .catch(console.error);
    }

    /*
     * Funkcija ištrinanti kategoriją iš publicCategories masyvo
     * urlSlug - kategorijos identifikatorius
     */
    function deletePublicCategory(urlSlug) {
        setPublicCategories(currentList => 
            currentList.filter(category => category.url_slug !== urlSlug)
        );
    }

    /*
     * Funkcija ištrinanti kategoriją iš adminCategories masyvo
     * urlSlug - kategorijos identifikatorius
     */
    function deleteAdminCategory(urlSlug) {
        setAdminCategories(currentList => 
            currentList.filter(category => category.url_slug !== urlSlug)
        );
    }

    /*
     * Funkcija grąžinanti konkretą viešą kategoriją pagal urlSlug
     */
    function getPublicCategoryByUrlSlug(urlSlug) {
        return publicCategories.find(category => category.url_slug === urlSlug);
    }

    /*
     * Funkcija grąžinanti konkretą admin kategoriją pagal urlSlug
     */
    function getAdminCategoryByUrlSlug(urlSlug) {
        return adminCategories.find(category => category.url_slug === urlSlug);
    }

    /*
     * useEffect vykdomas tik pirmą kartą užkrovus komponentą
     * Iškviečia updatePublicCategories funkciją
     */
    useEffect(updatePublicCategories, []);

    /*
     * useEffect priklausomas nuo isLoggedIn reikšmės
     * Jei vartotojas prisijungęs - atnaujina admin kategorijas
     * Jei atsijungęs - resetina admin kategorijas į pradinę būseną
     */
    useEffect(() => {
        if (isLoggedIn) {
            updateAdminCategories();
        } else {
            setAdminCategories(() => initialCategoriesContext.adminCategories);
        }
    }, [isLoggedIn]);

    /*
     * Objektas su visomis reikšmėmis ir funkcijomis,
     * kurios bus prieinamos per kontekstą
     */
    const values = {
        publicCategories,
        adminCategories,
        getPublicCategoryByUrlSlug,
        getAdminCategoryByUrlSlug,
        updatePublicCategories,
        updateAdminCategories,
        deletePublicCategory,
        deleteAdminCategory,
    };

    /*
     * Konteksto Provider komponentas, kuris perduoda reikšmes
     * visiems vaikiniams komponentams
     */
    return (
        <CategoriesContext.Provider value={values}>
            {props.children}
        </CategoriesContext.Provider>
    )
}