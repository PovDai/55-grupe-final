import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './pages/public/Home';
import { PublicLayout } from './templates/PublicLayout';
import { NotFoundPage } from './pages/public/NotFound';
import { CategoriesPage } from './pages/public/Categories';
import { MoviesPage } from './pages/public/Movies';
import { CategoryInnerPage } from './pages/public/CategoryInner';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' index element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category' element={<CategoryInnerPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
