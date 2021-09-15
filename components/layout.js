import styles from '../styles/Layout.module.css'
import React from "react";
import Nav from "./Header/nav";
import Footer from "./Footer";

const Layout = ({children, seo}) => {
    return (
        <div className={styles.layout}>
            <Nav/>

            <main className={styles.main}>{children}</main>

            <Footer/>
        </div>
    )
}
export default Layout

