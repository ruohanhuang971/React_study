import type { ReactNode } from 'react';

interface NavBarProp {
    children: ReactNode;
}

const NavBar = ({ children }: NavBarProp) => {
    return <nav className="nav-bar">{children}</nav>;
};

export default NavBar;
