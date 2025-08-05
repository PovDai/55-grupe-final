export function RegisterForm() {
    return (
        <form className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" type="text" className="form-control fs-5" required="" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" className="form-control fs-5" required="" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" type="password" className="form-control fs-5" required="" />
            </div>
            <div className="mb-4">
                <input className="form-check-input me-2 mt-0" style={{ width: '1.5rem', height: '1.5rem' }} type="checkbox" value="agree" id="tos" required="" />
                <label style={{ lineHeight: '1.5rem' }} htmlFor="tos">Agree to our Terms of Service</label>
            </div>
            <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Register</button>
            </div>
        </form>
    );
}