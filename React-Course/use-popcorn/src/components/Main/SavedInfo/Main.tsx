import type { ReactNode } from 'react';

interface MainProp {
    children: ReactNode;
}

const Main = ({ children }: MainProp) => {
    return (
        <div>
            <main className="main">{children}</main>
        </div>
    );
};

export default Main;
