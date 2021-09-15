import React from "react";
import Slider from "react-slick";
import styles from '../../styles/Home.module.css'
import Rating from "./Rating";
import Image from "next/image";

const BestDeals = () => {
    const settings = {
        className: "center",
        centerPadding: "60px",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div className={styles.BestDeals}>
            <div className={styles.BestDeals__title}>
                <h2>Best <span>Deals</span></h2>
                <span>View All</span>
            </div>

            <Slider {...settings}>
                <div className={styles.BestDeals__card} style={{width: 450}}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-1.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <span className={styles.BestDeals__card__discount}>-20%</span>
                    <div className={styles.BestDeals__card__info}>
                        <h3>SALVATORE FERRAGAMO</h3>
                        <small>Description lorem ipsum - one line only then...</small>
                        <div className={styles.BestDeals__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.BestDeals__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            | <span>10.000,000 Դ</span> | Available 32
                        </p>
                        <div className={styles.BestDeals__card__info_buttons}>
                            <button>Price It</button>
                            <button>Buy it</button>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.BestDeals__card} style={{width: 510}}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-2.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <span className={styles.BestDeals__card__discount}>-20%</span>
                    <div className={styles.BestDeals__card__info}>
                        <h3>SALVATORE FERRAGAMO</h3>
                        <small>Description lorem ipsum - one line only then...</small>
                        <div className={styles.BestDeals__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.BestDeals__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            | <span>10.000,000 Դ</span> | Available 32
                        </p>
                        <div className={styles.BestDeals__card__info_buttons}>
                            <button>Price It</button>
                            <button>Buy it</button>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.BestDeals__card} style={{width: 430}}>
                    <Image
                        alt="Mountains"
                        src="/Slide2-3.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <span className={styles.BestDeals__card__discount}>-20%</span>
                    <div className={styles.BestDeals__card__info}>
                        <h3>SALVATORE FERRAGAMO</h3>
                        <small>Description lorem ipsum - one line only then...</small>
                        <div className={styles.BestDeals__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.BestDeals__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            | <span>10.000,000 Դ</span> | Available 32
                        </p>
                        <div className={styles.BestDeals__card__info_buttons}>
                            <button>Price It</button>
                            <button>Buy it</button>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default BestDeals