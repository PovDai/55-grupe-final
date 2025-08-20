import { useContext, useState } from 'react';
import defaultImg from '../../assets/default.png';
import { CategoriesContext } from '../../context/categories/CategoriesContext';
import { SERVER_ADDRESS } from '../../env';

export function AdminMovieForm({ movie }) {
    const { adminCategories } = useContext(CategoriesContext);

    const [generalErr, setGeneralErr] = useState('');

    const [img, setImg] = useState(movie?.img ?? '');
    const [imgErr, setImgErr] = useState('');

    const [title, setTitle] = useState(movie?.title ?? '');
    const [titleErr, setTitleErr] = useState('');

    const [url, setUrl] = useState(movie?.url ?? '');
    const [urlErr, setUrlErr] = useState('');

    const [description, setDescription] = useState(movie?.description ?? '');
    const [descriptionErr, setDescriptionErr] = useState('');

    const [hours, setHours] = useState(movie?.duration ? (movie.duration - movie.duration % 60) / 60 : 0);
    const [minutes, setMinutes] = useState(movie?.duration ? movie.duration % 60 : 0);
    const [categoryId, setCategoryId] = useState(movie?.categoryId ?? 0);
    const [releaseDate, setReleaseDate] = useState(movie?.releaseDate ?? '');
    const [rating, setRating] = useState(movie?.rating ?? 50);
    const [status, setStatus] = useState(movie?.status ?? 'draft');

    const duration = hours * 60 + minutes;

    function handleImageFormSubmit(e) {
        e.preventDefault();
        console.log('image upload...');
    }

    function handleMainFormSubmit(e) {
        e.preventDefault();

        const data = {
            title,
            url,
            duration,
            category: categoryId,
            status,
            rating,
        };

        if (description) {
            data.description = description;
        }
        if (img) {
            data.img = img;
        }
        if (releaseDate) {
            data.releaseDate = releaseDate;
        }

        fetch(SERVER_ADDRESS + '/api/admin/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'error') {
                    if (typeof data.msg === 'string') {
                        setGeneralErr(data.msg);
                    } else {
                        if (data.msg.title) {
                            setTitleErr(data.msg.title);
                        }
                        if (data.msg.description) {
                            setDescriptionErr(data.msg.description);
                        }
                        if (data.msg.url) {
                            setUrlErr(data.msg.url);
                        }
                        if (data.msg.img) {
                            setImgErr(data.msg.img);
                        }
                    }
                }
            })
            .catch(console.error);
    }

    // TODO: reik <alert> elemento, bendrinems klaidos rodyti

    return (
        <>
            <form onSubmit={handleImageFormSubmit} className="col-12 col-md-9 col-lg-6 mt-5">
                <img id="img_preview" className="d-block w-100 object-fit-contain"
                    style={{ height: '20rem', backgroundColor: '#eee' }}
                    src={img ? img : defaultImg} alt="Movie thumbnail" />
                <p id="img_path">{img}</p>
                <input type="file" className={"form-control" + (imgErr ? ' is-invalid' : '')} id="img" name="img" />
                <div className="invalid-feedback">{imgErr}</div>
            </form>

            <form onSubmit={handleMainFormSubmit} className="col-12 col-md-9 col-lg-6 mt-5">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title}
                        type="text" className={"form-control" + (titleErr ? ' is-invalid' : '')} id="title" required />
                    <div className="invalid-feedback">{titleErr}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Url slug</label>
                    <input onChange={e => setUrl(e.target.value)} value={url}
                        type="text" className={"form-control" + (urlErr ? ' is-invalid' : '')} id="url" required />
                    <div className="invalid-feedback">{urlErr}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea onChange={e => setDescription(e.target.value)} value={description}
                        className={"form-control" + (descriptionErr ? ' is-invalid' : '')} id="description"></textarea>
                    <div className="invalid-feedback">{descriptionErr}</div>
                </div>
                <div className="row">
                    <p>Duration</p>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="duration_hours" className="form-label">Hours</label>
                        <input onChange={e => setHours(e.target.value)} value={hours}
                            min="0" max="4" step="1" type="number" className="form-control" id="duration_hours" />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="duration_minutes" className="form-label">minutes</label>
                        <input onChange={e => setMinutes(e.target.value)} value={minutes}
                            min="0" max="59" step="1" type="number" className="form-control" id="duration_minutes" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select onChange={e => setCategoryId(e.target.value)} value={categoryId} className="form-select" id="category">
                        <option value={0}>-- choose</option>
                        {adminCategories.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="release_date" className="form-label">Release date</label>
                    <input onChange={e => setReleaseDate(e.target.value)} value={releaseDate} type="date"
                        className="form-control" id="release_date" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <input onChange={e => setRating(e.target.value * 10)} value={rating / 10} type="number"
                        min="1" max="5" step="0.1" className="form-control" id="rating" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div className="form-check">
                        <input onChange={() => setStatus('published')} checked={status === 'published' ? 'checked' : ''}
                            type="radio" name="radios" className="form-check-input" id="status_published" />
                        <label className="form-check-label" htmlFor="status_published">Published</label>
                    </div>
                    <div className="form-check">
                        <input onChange={() => setStatus('draft')} checked={status === 'draft' ? 'checked' : ''}
                            type="radio" name="radios" className="form-check-input" id="status_draft" />
                        <label className="form-check-label" htmlFor="status_draft">Draft</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    );
}