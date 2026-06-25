import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Footer from "../components/footer/footer";
import { Header } from "../components/header/Header";

export default function RootLayout() {
    return (
        <div className={styles.root}>
            <Header />
            <main className=" flex-1 p-6">
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    )
}

