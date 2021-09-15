import React from "react";
import Slider from "react-slick";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Brands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className={styles.Brands}>
            <div className={styles.Brands__title}>
                <h2>Categories</h2>
                <span>View All</span>
            </div>

            <Slider {...settings}>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Clothing</h3>
                </div>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Shoes</h3>
                </div>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Watches</h3>
                </div>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Toys</h3>
                </div>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Bags</h3>
                </div>
                <div className={styles.Brands__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={190}
                        height={120}
                    />
                    <h3>Bags</h3>
                </div>
            </Slider>
        </div>
    );
}
export default Brands