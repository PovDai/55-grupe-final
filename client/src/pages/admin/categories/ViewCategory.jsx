import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";

export function AdminViewCategoryPage() {
    const category = {
        title: 'Action',
        url: 'action',
        description: 'Very action, much movie',
        status: 'published',
    };

    return (
        <main>
            <AdminPageTitle title="View category" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        <Alert text='Norima kategorija nerasta, todel jos perziureti yra neimanomas.' />
                    </div>
                    <div className="col-12 col-md-9 mt-5">
                        <table className="table table-bordered border-primary">
                            <tbody>
                                <tr className="mb-3">
                                    <td>Title</td>
                                    <td>{category.title}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Url slug</td>
                                    <td>{category.url}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Description</td>
                                    <td>{category.description}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Status</td>
                                    <td>
                                        {
                                            category.status === 'published'
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