import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { NotFoundPage } from './pages/public/NotFound';
import { CategoriesPage } from './pages/public/Categories';
import { MoviesPage } from './pages/public/Movies';
import { CategoryInnerPage } from './pages/public/CategoryInner';
import { MovieInnerPage } from './pages/public/MovieInner';
import { RegisterPage } from './pages/public/Register';
import { LoginPage } from './pages/public/Login';
import { AdminDasboardPage } from './pages/admin/Dashboard';
import { AdminLayout } from './templates/AdminLayout';
import { AdminCategoriesAllPage } from './pages/admin/categories/CategoriesAll';
import { AdminNewCategoryPage } from './pages/admin/categories/NewCategory';
import { AdminViewCategoryPage } from './pages/admin/categories/ViewCategory';
import { AdminEditCategoryPage } from './pages/admin/categories/EditCategory';
import { AdminCategoriesPublishedPage } from './pages/admin/categories/CategoriesPublished';
import { AdminCategoriesDraftPage } from './pages/admin/categories/CategoriesDraft';
import { AdminMoviesAllPage } from './pages/admin/movies/MoviesAll';
import { AdminNewMoviePage } from './pages/admin/movies/NewMovie';
import { AdminViewMoviePage } from './pages/admin/movies/ViewMovie';
import { AdminEditMoviePage } from './pages/admin/movies/EditMovie';
import { AdminMoviesPublishedPage } from './pages/admin/movies/MoviesPublished';
import { AdminMoviesDraftPage } from './pages/admin/movies/MoviesDraft';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' index element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movie' element={<MovieInnerPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category' element={<CategoryInnerPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<AdminDasboardPage />} />

          <Route path='/admin/movies' element={<AdminMoviesAllPage />} />
          <Route path='/admin/movies/new' element={<AdminNewMoviePage />} />
          <Route path='/admin/movies/:movie' element={<AdminViewMoviePage />} />
          <Route path='/admin/movies/:movie/edit' element={<AdminEditMoviePage />} />
          <Route path='/admin/movies/published' element={<AdminMoviesPublishedPage />} />
          <Route path='/admin/movies/draft' element={<AdminMoviesDraftPage />} />

          <Route path='/admin/categories' element={<AdminCategoriesAllPage />} />
          <Route path='/admin/categories/new' element={<AdminNewCategoryPage />} />
          <Route path='/admin/categories/:category' element={<AdminViewCategoryPage />} />
          <Route path='/admin/categories/:category/edit' element={<AdminEditCategoryPage />} />
          <Route path='/admin/categories/published' element={<AdminCategoriesPublishedPage />} />
          <Route path='/admin/categories/draft' element={<AdminCategoriesDraftPage />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}