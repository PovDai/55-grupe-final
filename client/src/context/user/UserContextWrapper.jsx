import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { initialUserContext } from "./initialUserContext";

export function UserContextWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
    const [role, setRole] = useState(initialUserContext.role);
    const [email, setEmail] = useState(initialUserContext.email);
    const [userId, setUserId] = useState(initialUserContext.userId);

    useEffect(() => {
        fetch('http://localhost:5519/api/login', {
            method: 'GET',
            credentials:'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    console.log(data.user.email,data.user.id);
                    login()
                }
            })
            .catch(console.error);
    }, []);
    

    function login(email, userId) {
        setIsLoggedIn(true);
        setRole('admin');
        setEmail(email);
        setUserId(userId);
    }

    function logout() {
        setIsLoggedIn(initialUserContext.isLoggedIn);
        setRole(initialUserContext.role);
        setEmail(initialUserContext.email);
        setUserId(initialUserContext.userId);
    }

    const values = {
        isLoggedIn,
        role,
        email,
        userId,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

