import { createContext, useState } from "react";


interface NavProps {
    openMenu: boolean;
    wrapperMenu: () => void;
}

export const NavContext = createContext({} as NavProps);

export const NavProvider = ({children}:{children: JSX.Element}) => {

    const [openMenu, setOpenMenu] = useState(false);
    const wrapperMenu = () => setOpenMenu(!openMenu);

    return (
        <NavContext.Provider value={{openMenu, wrapperMenu}}>
            {children}
        </NavContext.Provider>
    )
}