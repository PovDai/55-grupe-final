import { Link } from 'react-router';

export function CategoryCard({ category }) {
    return (
        <div className="feature col my-4">
            <h3 className="fs-2 text-body-emphasis">{category.title}</h3>
            <p>{category.description}</p>
            <p>Movies count: {category.moviesCount}</p>
            <Link to={'/categories/' + category.url_slug} className="icon-link">Read more</Link>
        </div>
    );
}