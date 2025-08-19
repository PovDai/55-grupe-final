import { useContext } from 'react';
import { Link } from 'react-router';
import { CategoriesContext } from '../../context/categories/CategoriesContext';
import { formatDuration } from '../../lib/formatDuration';
import defaultImg from '../../assets/default.png';

export function AdminMoviesTableRow({ data }) {
    const { adminCategories } = useContext(CategoriesContext);

    if (!adminCategories.length) {
        return;
    }

    const imgPath = data.img ? ('http://localhost:5519/img/movies/' + data.img) : defaultImg;

    return (
        <tr>
            <th scope="row">{data.id}</th>
            <td><img src={imgPath} alt="Movie thumbnail" style={{ maxHeight: '4rem' }} /></td>
            <td><Link to={"/admin/movies/" + data.url_slug}>{data.title}</Link></td>
            <td><span className="badge text-bg-success">Provided</span></td>
            <td>{
                data.duration_in_minutes
                    ? formatDuration(data.duration_in_minutes)
                    : <span class="badge text-bg-warning">Not selected</span>
            }</td>
            <td>
                {
                    data.category_id
                        ? adminCategories.find(c => c.id === data.category_id).title
                        : <span className="badge text-bg-warning">Not selected</span>
                }
            </td>
            <td>
                {
                    data.status_name === 'published'
                        ? <span className="badge text-bg-success">Published</span>
                        : <span className="badge text-bg-warning">Draft</span>
                }
            </td>
            <td>
                <div className="d-flex gap-3">
                    <Link className="btn btn-primary btn-sm" to={`/admin/movies/${data.url_slug}/edit`}>Edit</Link>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </div>
            </td>
        </tr>
    );
}


{/* <tr>
    <th scope="row">2</th>
    <td><img src="/img/movies/movie-1753166114584-540007.jpg" alt="Movie thumbnail" style={{ maxHeight: '4rem' }} /></td>
    <td><Link to="/admin/movies/asd">asd</Link></td>
    <td><span className="badge text-bg-success">Provided</span></td>
    <td>1 hour 1 minute</td>
    <td>Documentary</td>
    <td><span className="badge text-bg-success">Published</span></td>
    <td>
        <div className="d-flex gap-3">
            <Link className="btn btn-primary btn-sm" to="/admin/movies/asd/edit">Edit</Link>
            <button data-url="asd" className="btn btn-danger btn-sm">Delete</button>
        </div>
    </td>
</tr> */}