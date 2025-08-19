import { useContext } from "react";
import { AdminMoviesTable } from "../../../components/admin-movies-table/AdminMoviesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { MoviesContext } from "../../../context/movies/MoviesContext";

export function AdminMoviesAllPage() {
    const { adminMovies } = useContext(MoviesContext);

    return (
        <main>
            <AdminPageTitle title="All movies" />
            <AdminMoviesTable movies={adminMovies} />
        </main>
    );
}