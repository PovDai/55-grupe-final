import { Link } from 'react-router';
import heroImg from '../../assets/hero.png';

export function NotFoundPage() {
    return (
        <main className='min-page-height'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                            width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">404</h1>
                        <p className="lead">Page not found</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/" className="btn btn-primary btn-lg px-4 me-md-2">Go home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}