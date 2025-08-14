import { Link } from 'react-router';

export function AdminCategoriesTableRow({ data }) {
    return (
        <tr>
            <th scope="row">{data.id}</th>
            <td><Link to={"/admin/categories/" + data.url_slug}>{data.title}</Link></td>
            <td>{data.url_slug}</td>
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
                <Link className="btn btn-primary btn-sm" to={`/admin/categories/${data.url_slug}/edit`}>Edit</Link>
                <button data-url={data.url_slug} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
}