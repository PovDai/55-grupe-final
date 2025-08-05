export function MoviesFilter() {
    return (
        <div className="container mb-5">
            <form className="row g-3">
                <div className="col-12 col-xl-4">
                    <label for="title" className="form-label">Pavadinimas</label>
                    <input type="text" className="form-control" id="title" placeholder="Filtruoti pagal pavadinimą ar aprašą" />
                </div>
                <div className="col-12 col-md-4 col-xl-2">
                    <label for="duration" className="form-label">Trukmė</label>
                    <select id="duration" className="form-control" name="duration">
                        <option value="0">Visi</option>
                        <option value="1">0+ hour</option>
                        <option value="2">1+ hour</option>
                        <option value="3">2+ hour</option>
                        <option value="4">3+ hour</option>
                        <option value="5">4+ hour</option>
                    </select>
                </div>
                <div className="col-12 col-md-4 col-xl-2">
                    <label for="category" className="form-label">Kategorija</label>
                    <select id="category" className="form-control" name="category">
                        <option value="0">Visos</option>
                        <option value="action">Action</option>
                        <option value="animation">Animation</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                    </select>
                </div>
                <div className="col-12 col-md-4 col-xl-2">
                    <label for="rating" className="form-label">Reitingas</label>
                    <select id="rating" className="form-control" name="rating">
                        <option value="0">Visi</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div className="col-12 col-xl-2 d-flex">
                    <button type="submit" className="btn btn-primary w-100">Filtruoti</button>
                </div>
            </form>
        </div>
    );
}