import React from "react";
import styles from './../styles/Signin.module.css'
import Layout from "./../components/layout";
import Seo from "./../components/seo";

const Signin = () => {
    const seo = {
        metaTitle: "Signin",
        metaDescription: "Signin Description",
        article: true,
    };
    return (
        <Layout>
            <Seo seo={seo} />

            <main className={styles.signin}>
                <h1>
                    Signin page
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, doloribus eius fuga magnam nesciunt non quam quidem soluta. Beatae debitis dolor earum facilis fugiat ipsam iure numquam perferendis totam vel!</p>
            </main>
        </Layout>
    )
}
export default Signin