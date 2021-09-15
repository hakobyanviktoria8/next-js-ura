//https://strapi.io/blog/build-a-blog-with-next-react-js-strapi
//use nodejs API

export function getURL(path = "") {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || 
        "https://api.github.com/users/viki"       
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    // console.log("fetchAPI data ",data);
    return data;
}