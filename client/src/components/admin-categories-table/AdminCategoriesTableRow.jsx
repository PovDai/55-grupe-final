import { useContext } from 'react';
import { Link } from 'react-router';
import { CategoriesContext } from '../../context/categories/CategoriesContext';

export function AdminCategoriesTableRow({ data }) {
    const { deletePublicCategory, deleteAdminCategory } = useContext(CategoriesContext);
    const urlSlug = data.url_slug;

    function handleDeleteClick() {
        fetch('http://localhost:5519/api/admin/categories/' + urlSlug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicCategory(urlSlug);
                    deleteAdminCategory(urlSlug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th scope="row">{data.id}</th>
            <td><Link to={"/admin/categories/" + urlSlug}>{data.title}</Link></td>
            <td>{urlSlug}</td>
            <td>{data.description}</td>
            <td>{data.moviesCount}</td>
            <td>
                {
                    data.status_name === 'published'
                        ? <span className="badge text-bg-success">Published</span>
                        : <span className="badge text-bg-warning">Draft</span>
                }

            </td>
            <td className="d-flex gap-3">
                <Link className="btn btn-primary btn-sm" to={`/admin/categories/${urlSlug}/edit`}>Edit</Link>
                <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
}