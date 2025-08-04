import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';

export function CategoryInnerPage() {
    const moviesData = [{}, {}];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='{{Category title}}' />

            <div className="container">
                <div className="row">
                    {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                </div>
            </div>
        </main>
    );
}