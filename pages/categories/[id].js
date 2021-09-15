import React from 'react'
import {useRouter} from 'next/router'
import Link from "next/link";

export default function Categories() {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <h1>Note: {id} </h1>

            <Link href="/categories/[id].js" as={`/categories/${id}`}>
                <a>ID : {id}</a>
            </Link>
        </div>
    )
}
