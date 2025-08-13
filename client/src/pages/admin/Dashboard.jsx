import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDasboardPage() {
    const { email,role } = useContext(UserContext);

    return (
        <main>
            <p>Email: {email}</p>
            <p>Esate prisijunge kaip: {role}</p>
        </main>
    );
}