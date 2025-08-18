import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories/CategoriesContext';
import { useParams } from 'react-router';
import { MoviesContext } from '../../context/movies/MoviesContext';

export function CategoryInnerPage() {
    const { publicCategories } = useContext(CategoriesContext);
    const { publicMovies } = useContext(MoviesContext);
    const { category } = useParams();

    const categoryData = publicCategories.find(c => c.url_slug === category);

    if (!categoryData) {
        return (
            <main className='min-page-height'>
                <PublicPageTitle title="Kategorija nerasta" />

                <div className="container">
                    <div className="row">
                        <p>Norima kategorija "{category}" neegzistuoja.</p>
                    </div>
                </div>
            </main>
        );
    }

    const moviesData = publicMovies.filter(m => m.category_id === categoryData.id);

    return (
        <main className='min-page-height'>
            <PublicPageTitle title={categoryData.title} />

            <div className="container">
                <div className="row">
                    {
                        moviesData.length
                            ? moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)
                            : <div className='col-12 alert alert-warning'>Panašu, jog šioje kategorijoje šiuo metu nėra jokių filmų.</div>
                    }
                </div>
            </div>
        </main>
    );
}