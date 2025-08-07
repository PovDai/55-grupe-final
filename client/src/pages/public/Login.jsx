import { Link } from "react-router";
import { LoginForm } from "../../components/forms/LoginForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/UserContext";

export function LoginPage() {
    const { isLoggedIn, tapIn, color, tapGreen, tapNone, role } = useContext(UserContext);
    const [coloris, setColoris] = useState('none')
    const [count, setCount] = useState(0);

    function handleGrey() {
        setColoris('')
    }
    function handleCount() {
        setCount(count +1 );
    }
 
    

    return (
        <main className="min-page-height">
            <PublicPageTitle title="Login" />
         
            <div className="container">
                <div  className="row">
                    {
                        isLoggedIn
                            ? <>
                                <div>
                                <button className="btn btn-danger btn-sm" onClick={tapIn}>Click red</button>
                                <button className="btn btn-success m-2" onClick={tapGreen}>Click green</button>
                                    <button className="btn btn-primary " onClick={tapNone}>Click none</button>
                                    <button className="btn btn-primary m-2" onClick={() => setColoris('grey')}>Click grey</button>
                                    <button className="btn btn-info m-2 btn-lg" onDoubleClick={handleGrey}>Click double</button>
                                    <button className="btn btn-primary " onClick={handleCount}>Count</button>
                                </div>
                                <h1 style={{ backgroundColor: color}}>Jūs esate prisijunge kaip {role} vartotojai</h1>
                                <p style={{ backgroundColor: coloris}}>Einamuoju metu prie sistemos prisijunge vartotojai negali prisijungti prie kitos paskyros. Noredami ta atlikti - atsijunkite nuo dabartines paskyros.</p>
                                <>
                                    {count % 2 === 0 ? <h2 onDoubleClick={handleGrey} style={{ backgroundColor: 'grey'? 'purple': 'grey' }}> priskaiciuota: {count}</h2> : <h2 style={{ backgroundColor: 'green' }}> priskaiciuota: {count}</h2>}
                                    </>
                                <div className="d-flex gap-3">
                                    <Link to='/logout' className="btn btn-primary">Logout</Link>
                                    or
                                    <Link to='/admin' className="btn btn-primary">Go to dashboard</Link>
                                </div>
                            </>

                            : <LoginForm />
                    }
                </div>
            </div>
        </main>
    );
}