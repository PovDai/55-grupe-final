import { useContext } from "react";
import { AdminMoviesTable } from "../../../components/admin-movies-table/AdminMoviesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { MoviesContext } from "../../../context/movies/MoviesContext";

export function AdminMoviesDraftPage() {
    const { adminMovies } = useContext(MoviesContext);

    return (
        <main>
            <AdminPageTitle title="Draft movies" />
            <AdminMoviesTable movies={adminMovies.filter(m => m.status_name === 'draft')} />
        </main>
    );
}