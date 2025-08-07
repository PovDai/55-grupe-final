// React konteksto sukūrimo failas
// Šis failas sukuria ir eksportuoja kontekstą, kuris bus naudojamas visoje aplikacijoje

// 1. Importuojame reikalingus modulius iš React bibliotekos
import { createContext } from "react";  // Pagrindinė React funkcija kontekstui kurti
import { initialUserContext } from "./initialUserContext";  // Pradinės konteksto reikšmės

// 2. Sukuriame ir eksportuojame UserContext objektą
export const UserContext = createContext(initialUserContext);
/*
   createContext() funkcija:
   - Sukuria naują konteksto objektą
   - Kaip argumentą priima pradinę reikšmę (initialUserContext)
   - Grąžina objektą su dviem svarbiomis dalimis:
     * Provider - komponentas, kuris tieks reikšmes
     * Consumer - būdas gauti reikšmes (dabar dažniau naudojamas useContext hook)

   Šis kontekstas leis:
   - Vartotojo duomenims (email, role, userId) būti pasiekiamiems bet kurioje komponentoje
   - Keisti prisijungimo būseną (isLoggedIn)
   - Naudoti login/logout funkcijas visoje aplikacijoje
*/

// NAUDOJIMO PAVYZDYS:
// 1. Apgaubti aplikaciją UserContext.Provider komponentu
// 2. Nurodyti value={...} su visomis reikšmėmis ir funkcijomis
// 3. Bet kurioje vaikinėje komponentoje naudoti:
//    const { isLoggedIn, login, logout } = useContext(UserContext);