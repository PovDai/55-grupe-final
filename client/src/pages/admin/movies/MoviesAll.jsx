import { AdminMoviesTable } from "../../../components/AdminMoviesTable";
import { AdminPageTitle } from "../../../components/AdminPageTitle";

export function AdminMoviesAllPage() {
    return (
        <main>
            <AdminPageTitle title="All movies" />
            <AdminMoviesTable />
        </main>
    );
}