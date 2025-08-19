import { AdminMoviesTableRow } from './AdminMoviesTableRow';

export function AdminMoviesTable({ movies }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => <AdminMoviesTableRow key={movie.id} data={movie} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}