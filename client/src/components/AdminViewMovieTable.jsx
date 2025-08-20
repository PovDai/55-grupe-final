import { useContext } from "react";
import { formatDuration } from "../lib/formatDuration";
import { formatRating } from "../lib/formatRating";
import { CategoriesContext } from "../context/categories/CategoriesContext";
import defaultImg from '../assets/default.png';
import { SERVER_ADDRESS } from "../env";

export function AdminViewMovieTable({ movieData }) {
    const { getAdminCategoryById } = useContext(CategoriesContext);

    const categoryData = getAdminCategoryById(movieData.category_id);
    const imgPath = movieData.img ? (SERVER_ADDRESS + '/img/movies/' + movieData.img) : defaultImg;

    return (
        <table className="table table-bordered border-primary">
            <tbody>
                <tr className="mb-3">
                    <td>Thumbnail</td>
                    <td>
                        <img style={{ maxHeight: '5rem' }} src={imgPath} alt="Movie thumbnail" />
                        <p>{movieData.img}</p>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>Title</td>
                    <td>{movieData.title}</td>
                </tr>
                <tr className="mb-3">
                    <td>Url slug</td>
                    <td>{movieData.url_slug}</td>
                </tr>
                <tr className="mb-3">
                    <td>Description</td>
                    <td>{movieData.description}</td>
                </tr>
                <tr className="mb-3">
                    <td>Duration</td>
                    <td>{
                        movieData.duration_in_minutes
                            ? formatDuration(movieData.duration_in_minutes)
                            : <span class="badge text-bg-warning">Not selected</span>
                    }</td>
                </tr>
                <tr className="mb-3">
                    <td>Category</td>
                    <td>{
                        categoryData
                            ? categoryData.title
                            : <span class="badge text-bg-warning">Not selected</span>
                    }</td>
                </tr>
                <tr className="mb-3">
                    <td>Release date</td>
                    <td>{movieData.release_date}</td>
                </tr>
                <tr className="mb-3">
                    <td>Rating</td>
                    <td>{formatRating(movieData.rating)}</td>
                </tr>
                <tr className="mb-3">
                    <td>Status</td>
                    <td>
                        {
                            movieData.status_name === 'published'
                                ? <span className="badge text-bg-success">Published</span>
                                : <span className="badge text-bg-warning">Draft</span>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}