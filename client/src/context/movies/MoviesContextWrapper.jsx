import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { initialMoviesContext } from "./initialMoviesContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../env.js";

export function MoviesContextWrapper(props) {
    const [publicMovies, setPublicMovies] = useState(initialMoviesContext.publicMovies);
    const [adminMovies, setAdminMovies] = useState(initialMoviesContext.adminMovies);

    const { isLoggedIn } = useContext(UserContext);

    function updatePublicMovies() {
        fetch(SERVER_ADDRESS+'/api/movies', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicMovies(() => data.movies);
                }
            })
            .catch(console.error);
    }

    function updateAdminMovies() {
        fetch(SERVER_ADDRESS+'/api/admin/movies', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminMovies(() => data.movies);// movies atkeliauja is server src/getMovies.js file. is ten servers siuncia json formatu. 
                }
            })
            .catch(console.error);
    }

    function deletePublicMovie(urlSlug) {
        setPublicMovies(currentList => currentList.filter(movie => movie.url_slug !== urlSlug));
    }

    function deleteAdminMovie(urlSlug) {
        setAdminMovies(currentList => currentList.filter(movie => movie.url_slug !== urlSlug));
    }

    function getPublicMovieByUrlSlug(urlSlug) {
        return publicMovies.find(movie => movie.url_slug === urlSlug);
    }

    function getAdminMovieByUrlSlug(urlSlug) {
        return adminMovies.find(movie => movie.url_slug === urlSlug);
    }

    useEffect(updatePublicMovies, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminMovies();
        } else {
            setAdminMovies(() => initialMoviesContext.adminMovies);
        }
    }, [isLoggedIn]);

/*useEffect – tai React hook'as, kuris leidžia paleisti tam tikrą logiką (efektą) kiekvieną kartą, kai pasikeičia nurodytos priklausomybės (dependency array).
Čia priklausomybė yra isLoggedIn, todėl useEffect bus paleistas kiekvieną kartą, kai pasikeis prisijungimo būsena.
if (isLoggedIn)
Jei vartotojas yra prisijungęs, iškviečiama updateAdminMovies() funkcija.
Tikėtina, kad ji atsiunčia ar atnaujina filmų duomenis administratoriui.
else (jei vartotojas atsijungęs)
Iškviečiamas setAdminMovies() su pradiniu reikšmių rinkiniu (initialMoviesContext.adminMovies).
Tai reiškia, kad filmų sąrašas atstatomas į pradinę būseną, kai vartotojas nebeprisijungęs.
}, [isLoggedIn]);
Dėl šios priklausomybės efektas bus paleidžiamas tik tada, kai pasikeis isLoggedIn reikšmė (nuo false į true arba atvirkščiai).*/

    const values = {
        publicMovies,
        adminMovies,
        getPublicMovieByUrlSlug,
        getAdminMovieByUrlSlug,
        updatePublicMovies,
        updateAdminMovies,
        deletePublicMovie,
        deleteAdminMovie,
    };

    return (
        <MoviesContext.Provider value={values}>
            {props.children}
        </MoviesContext.Provider>
    )
}