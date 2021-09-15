import React from "react";
import Layout from "./../components/layout";
import Seo from "./../components/seo";

const Notifications = () => {
    const seo = {
        metaTitle: "Notifications",
        metaDescription: "Notifications Description",
        article: true,
    };
    return (
        <Layout>
            <Seo seo={seo} />

            <main>
                <h1>
                    Notifications page
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, doloribus eius fuga magnam nesciunt non quam quidem soluta. Beatae debitis dolor earum facilis fugiat ipsam iure numquam perferendis totam vel!</p>
            </main>
        </Layout>
    )
}
export default Notifications