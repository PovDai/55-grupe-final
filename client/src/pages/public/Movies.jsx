import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';

export function MoviesPage() {
    const moviesData = [{}, {}, {}, {}, {}, {}, {}];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Movies' />

            <div>MOVIES FILTER</div>

            <div className="container">
                <div className="row">
                    {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                </div>
            </div>
        </main>
    );
}