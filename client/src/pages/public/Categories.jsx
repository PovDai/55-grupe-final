import { PublicPageTitle } from '../../components/PublicPageTitle';
import { CategoryCard } from '../../components/CategoryCard';

export function CategoriesPage() {
    const categoriesData = [
        {
            title: 'Action',
            description: 'Lorem ipsum dolor sit amet.',
            moviesCount: 7,
            urlSlug: 'action',
        },
        {
            title: 'Crime',
            description: 'Very lorem ipsum very dolor sit amet.',
            moviesCount: 66,
            urlSlug: 'crime',
        },
    ];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Categories' />

            <div className="container px-4" id="featured-3">
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    {categoriesData.map(category => <CategoryCard key={category.title} category={category} />)}
                </div>
            </div>
        </main>
    );
}