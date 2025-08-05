export function LoginForm() {
    return (
        <form className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="mb-4">
                <label htmlFor="username_or_email" className="form-label">Username</label>
                <input id="username_or_email" type="text" className="form-control fs-5" required="" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" type="password" className="form-control fs-5" required="" />
            </div>
            <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Login</button>
            </div>
        </form>
    );
}