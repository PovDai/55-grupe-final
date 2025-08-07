export const initialUserContext = {
    isLoggedIn: true,
    role: 'public',
    email: '',
    userId: 0,
    login: () => { },
    logout: () => { },
};

// PASTABOS:
// 1. Šis objektas naudojamas kaip pradinis reikšmė React.createContext()
// 2. Realioje aplikacijoje šios reikšmės keičiamos prisijungus/atsijungus
// 3. Paprastai Context Provider perduoda atnaujintas reikšmes
// 4. Visos komponentos, kurios naudoja šį kontekstą, gaus atnaujintas reikšmes