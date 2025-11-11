import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import CopyRight from './CopyRight';
import Logo from './Logo';
import styles from './Sidebar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            <CopyRight />
        </div>
    );
};

export default SideBar;
