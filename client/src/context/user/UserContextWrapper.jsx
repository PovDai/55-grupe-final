// React konteksto wrapperio komponentas
// Šis komponentas valdo vartotojo būseną ir teikia ją visai aplikacijai

// 1. Importuojame reikalingus React hook'us ir komponentus
import { useState } from "react"; // React būsenos valdymui
import { UserContext } from "./UserContext"; // Mūsų sukurtas kontekstas
import { initialUserContext } from "./initialUserContext"; // Pradinės reikšmės

// 2. Sukuriame konteksto wrapperio komponentą
export function UserContextWrapper(props) {
    /*
       Šis komponentas:
       - Valdo vartotojo prisijungimo būseną
       - Saugo vartotojo duomenis (role, email, userId)
       - Teikia login/logout funkcijas
       - Perduoda visas reikšmes per kontekstą
    */

    // 3. Sukuriame būsenos kintamuosius su pradinėmis reikšmėmis
    const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
    const [role, setRole] = useState(initialUserContext.role);
    const [email, setEmail] = useState(initialUserContext.email);
    const [userId, setUserId] = useState(initialUserContext.userId);
    const [color,setColor]=useState(initialUserContext.color)

    // 4. Prisijungimo funkcija
    function login(email, userId) {
        setIsLoggedIn(true); // Nustatome prisijungimo būseną į true
        setRole('admin'); // Nustatome rolę (realioje aplikacijoje gautume iš API)
        setEmail(email); // Išsaugome vartotojo el. paštą
        setUserId(userId); // Išsaugome vartotojo ID
        setColor('none');
    }

    // 5. Atsijungimo funkcija
    function logout() {
        // Atstatome visas reikšmes į pradines
        setIsLoggedIn(initialUserContext.isLoggedIn);
        setRole(initialUserContext.role);
        setEmail(initialUserContext.email);
        setUserId(initialUserContext.userId);
        setColor('none');
    }
    function tapIn() {
          setIsLoggedIn(true);
        setRole(initialUserContext.role);
        setEmail(initialUserContext.email);
        setUserId(initialUserContext.userId);
        setColor('red');
        
    }
     function tapGreen() {
          setIsLoggedIn(true);
        setRole(initialUserContext.role);
        setEmail(initialUserContext.email);
        setUserId(initialUserContext.userId);
        setColor('green');
        
    }
    function tapNone() {
           setIsLoggedIn(true);
        setRole(initialUserContext.role);
        setEmail(initialUserContext.email);
        setUserId(initialUserContext.userId);
        setColor('white');
        
    }

    // 6. Sukuriame objektą su visomis reikšmėmis ir funkcijomis
    const values = {
        isLoggedIn, // Prisijungimo būsena
        role,      // Vartotojo rolė
        email,     // Vartotojo el. paštas
        userId,
        color,// Vartotojo ID
        login,     // Prisijungimo funkcija
        logout,    // Atsijungimo funkcija
        tapIn,
        tapGreen,
        tapNone,
    };

    // 7. Gražiname konteksto provider'į su reikšmėmis
    return (
        <UserContext.Provider value={values}>
            {props.children} {/* Čia bus visi aplikacijos komponentai */}
        </UserContext.Provider>
    );
}

/*
KAIP NAUDOTI:
1. Pagrindiniame App.js (ar index.js) faile apgaubti aplikaciją šiuo wrapperiu:
   <UserContextWrapper>
     <App />
   </UserContextWrapper>

2. Bet kurioje komponentoje gauti reikšmes:
   const { isLoggedIn, login, logout } = useContext(UserContext);

SVARBU:
- Šis wrapperis valdo globalią vartotojo būseną
- Visi jo vaikiniai komponentai gali pasiekti vartotojo duomenis
- Login/logout funkcijos atnaujina būseną visoje aplikacijoje
*/