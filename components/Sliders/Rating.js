import React from "react";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
    ssr: false,
});

function Rating({rating}) {
    return (
        <StarRatings
            starRatedColor="black"
            rating={3.5}
            starDimension="18px"
            starSpacing="0px"
            numberOfStars={5}
            starEmptyColor="#c2c2c2"
            name='rating'
            starHoverColor="red"
            svgIconViewBox='0 0 51 48'
        />
    )
}

export default Rating