import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const NotFound = () => {
    const router = useRouter();

    //3 minute if page cannot found go back home page
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push("/")
        },3000)
    },[])

    return (
        <div>
            <h1>That page cannot be found!</h1>
            <p>Go to <Link href="/"><a> Home page</a></Link>
            </p>
        </div>
    )
};

export default NotFound
