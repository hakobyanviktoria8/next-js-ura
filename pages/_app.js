import '../styles/globals.css'
import Head from "next/head";
import App from "next/app";
import Script from 'next/script'
import {createContext} from "react";
import {fetchAPI} from "../lib/api";
import 'bootstrap/dist/css/bootstrap.css'

export const GlobalContext = createContext({});

function MyApp({Component, pageProps}) {
    const {global} = pageProps;

    return (
        <>
            <Head>
                <link rel="shortcut icon" href=""/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Staatliches"
                />
                <link
                    rel="stylesheet"
                    href=""
                />

                {/*write Script part here*/}
                {/*<Script src=""/>*/}
                {/*<Script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />*/}
                {/*<Script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />*/}
                {/*<Script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />*/}

            </Head>
            <GlobalContext.Provider value={global}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    )
}

MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const global = await fetchAPI("/");
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global } };
};

export default MyApp


//each request generated HTML
// export async function getServerSideProps({url}) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

