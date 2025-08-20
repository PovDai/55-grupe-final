import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user/UserContext";
import { SERVER_ADDRESS } from "../../env";

export function LoginForm() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const [formErr, setFormErr] = useState('');

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [usernameOrEmailErr, setUsernameOrEmailErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        // login('chuck@norris.lt', 1);
        // navigate('/admin');

        setFormErr('');
        setUsernameOrEmailErr('');
        setPasswordErr('');

        fetch(SERVER_ADDRESS + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                usernameOrEmail,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'error') {
                    if (typeof data.msg === 'string') {
                        setFormErr(data.msg);
                    }
                    if (data.msg.usernameOrEmail) {
                        setUsernameOrEmailErr(data.msg.usernameOrEmail);
                    }
                    if (data.msg.password) {
                        setPasswordErr(data.msg.password);
                    }
                } else {
                    if (data.user) {
                        login(data.user.email, data.user.id);
                    }
                    navigate('/admin');
                }
            })
            .catch(console.error);
    }

    return (
        <form onSubmit={handleFormSubmit} className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            {formErr && <div className="alert alert-danger">{formErr}</div>}
            <div className="mb-4">
                <label htmlFor="username_or_email" className="form-label">Username or Email</label>
                <input onChange={e => setUsernameOrEmail(e.target.value)} value={usernameOrEmail} id="username_or_email"
                    type="text" className={"form-control fs-5" + (usernameOrEmailErr ? ' is-invalid' : '')} required="" />
                <div className="invalid-feedback">{usernameOrEmailErr}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={e => setPassword(e.target.value)} value={password} id="password" type="password"
                    className={"form-control fs-5" + (passwordErr ? ' is-invalid' : '')} required="" />
                <div className="invalid-feedback">{passwordErr}</div>
            </div>
            <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Login</button>
            </div>
        </form>
    );
}