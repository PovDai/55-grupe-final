import { useParams } from 'react-router';
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { useContext } from 'react';
import { MoviesContext } from '../../../context/movies/MoviesContext';
import { AdminViewMovieTable } from '../../../components/AdminViewMovieTable';

export function AdminViewMoviePage() {
    const { getAdminMovieByUrlSlug } = useContext(MoviesContext);
    const { movie } = useParams();

    const movieData = getAdminMovieByUrlSlug(movie);

    return (
        <main>
            <AdminPageTitle title="View movie" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        {
                            movieData
                                ? <AdminViewMovieTable movieData={movieData} />
                                : <Alert text='Norimas filmas nerastas, todel jo perziureti yra neimanoma.' />
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}