import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';
import { MoviesFilter } from '../../components/MoviesFilter';

export function MoviesPage() {
    const moviesData = [{}, {}, {}, {}, {}, {}, {}];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Movies' />

            <MoviesFilter />

            <div className="container">
                <div className="row">
                    {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                </div>
            </div>
        </main>
    );
}