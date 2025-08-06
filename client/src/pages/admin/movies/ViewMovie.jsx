import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { formatDuration } from "../../../lib/formatDuration";
import { formatRating } from "../../../lib/formatRating";

export function AdminViewMoviePage() {
    const movie = {
        img: '/vite.svg',
        title: 'Action',
        url: 'action',
        description: 'Very action, much movie',
        duration: 122,
        category: 'Action',
        releaseDate: '2025-06-07',
        rating: 46,
        status: 'published',
    };

    return (
        <main>
            <AdminPageTitle title="View movie" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        <Alert text='Norimas filmas nerastas, todel jo perziureti yra neimanoma.' />
                    </div>
                    <div className="col-12 col-md-9 mt-5">
                        <table className="table table-bordered border-primary">
                            <tbody>
                                <tr className="mb-3">
                                    <td>Thumbnail</td>
                                    <td>
                                        <img style={{ maxHeight: '5rem' }} src={movie.img} alt="Movie thumbnail" />
                                        <p>{movie.img}</p>
                                    </td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Title</td>
                                    <td>{movie.title}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Url slug</td>
                                    <td>{movie.url}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Description</td>
                                    <td>{movie.description}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Duration</td>
                                    <td>{formatDuration(movie.duration)}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Category</td>
                                    <td>{movie.category}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Release date</td>
                                    <td>{movie.releaseDate}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Rating</td>
                                    <td>{formatRating(movie.rating)}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Status</td>
                                    <td>
                                        {
                                            movie.status === 'published'
                                                ? <span className="badge text-bg-success">Published</span>
                                                : <span className="badge text-bg-warning">Draft</span>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}