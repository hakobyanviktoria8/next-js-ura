import React from "react";
import Slider from "react-slick";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const CategoriesComp = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className={styles.CategoriesComp}>
            <div className={styles.CategoriesComp__title}>
                <h2>Categories</h2>
                <span>View All</span>
            </div>

            <Slider {...settings}>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Clothing</h3>
                </div>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Shoes</h3>
                </div>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Watches</h3>
                </div>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Toys</h3>
                </div>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Bags</h3>
                </div>
                <div className={styles.CategoriesComp__card}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        width={240}
                        height={280}
                    />
                    <h3>Bags</h3>
                </div>
            </Slider>
        </div>
    );
}
export default CategoriesComp