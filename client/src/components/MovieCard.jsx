import { useContext } from 'react';
import imgUrl from '../assets/hero.png';
import { CategoriesContext } from '../context/categories/CategoriesContext';

export function MovieCard({ movie }) {
    const { publicCategories } = useContext(CategoriesContext);
    const categoryData = publicCategories.find(c => c.id === movie.category_id);

    if (!categoryData) {
        return;
    }

    console.log(movie);
    console.log(publicCategories);

    return (
        <div className="col-12 col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-12 col-lg-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{categoryData.title}</strong>
                    <h3 className="mb-0">{movie.title}</h3>
                    <p className="card-text mb-auto">{movie.description}</p>
                    <div className="mb-1 text-body-secondary">Released: 1999-03-31</div>
                    <div className="mb-1 text-body-secondary">Duration: 2 hours 16 minutes</div>
                    <div className="mb-1 text-body-secondary">Rating: 4.3 ⭐</div>
                    <a href="/movies/matrix" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </a>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <img className="w-100 h-100 object-fit-cover" src={imgUrl} alt="Matrix" />
                </div>
            </div>
        </div>
    );
}