import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Footer from "../components/footer/footer";

export default function RootLayout() {
    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <Link to="/">Home</Link>
                    <Link to="/airports/1">Airports</Link>
                </ul>
            </nav>
            <main className="bg-gradient flex-1 p-6">
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    )
}

