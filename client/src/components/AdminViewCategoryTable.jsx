export function AdminViewCategoryTable({ data }) {
    return (
        <table className="table table-bordered border-primary">
            <tbody>
                <tr className="mb-3">
                    <td>Id</td>
                    <td>{data.id}</td>
                </tr>
                <tr className="mb-3">
                    <td>Title</td>
                    <td>{data.title}</td>
                </tr>
                <tr className="mb-3">
                    <td>Url slug</td>
                    <td>{data.url_slug}</td>
                </tr>
                <tr className="mb-3">
                    <td>Description</td>
                    <td>{data.description}</td>
                </tr>
                <tr className="mb-3">
                    <td>Status</td>
                    <td>
                        {
                            data.status_name === 'published'
                                ? <span className="badge text-bg-success">Published</span>
                                : <span className="badge text-bg-warning">Draft</span>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}