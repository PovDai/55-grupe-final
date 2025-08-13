import { useNavigate } from "react-router";

import { useState } from "react";

export function RegisterForm() {
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [tos, setTos] = useState('');
    const [tosErr, setTosErr] = useState('');

    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();

        setUsernameErr('');
        setEmailErr('');
        setPasswordErr('');
        setTosErr('');

        fetch('http://localhost:5519/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
                tos,
            }),
        })
            .then(res =>res.json())
            .then(data => {
                if (data.status === 'error') {
                    if (data.msg.username) {
                        setUsernameErr(data.msg.username);
                    }
                    if (data.msg.email) {
                        setEmailErr(data.msg.email);
                    }
                    if (data.msg.password) {
                        setPasswordErr(data.msg.password);
                    }
                    if (data.msg.tos) {
                        setTosErr(data.msg.tos);
                    }
                } else {
                    navigate('/login');
                }
            })
            .catch(console.error);
    }

    return (
        <form onSubmit={handleFormSubmit} className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input onChange={e => setUsername(e.target.value)} value={username} id="username" type="text"
                    className={"form-control fs-5" + (usernameErr ? ' is-invalid' : '')} required="" />
                <div className="invalid-feedback">{usernameErr}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input onChange={e => setEmail(e.target.value)} value={email} id="email" type="email"
                    className={"form-control fs-5" + (emailErr ? ' is-invalid' : '')} required="" />
                <div className="invalid-feedback">{emailErr}</div>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={e => setPassword(e.target.value)} value={password} id="password" type="password"
                    className={"form-control fs-5" + (passwordErr ? ' is-invalid' : '')} required="" />
                <div className="invalid-feedback">{passwordErr}</div>
            </div>
            <div className="mb-4">
                <input onChange={e => setTos(tos ? '' : e.target.value)} checked={!!tos}
                    className={"form-check-input me-2 mt-0" + (tosErr ? ' is-invalid' : '')} style={{ width: '1.5rem', height: '1.5rem' }} type="checkbox" value="agree" id="tos" required="" />
                <label style={{ lineHeight: '1.5rem' }} htmlFor="tos">Agree to our Terms of Service</label>
                <div className="invalid-feedback">{tosErr}</div>
            </div>
            <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Register</button>
            </div>
        </form>
    );
}