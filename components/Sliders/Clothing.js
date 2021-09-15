import React from "react";
import Slider from "react-slick";
import styles from '../../styles/Home.module.css'
import Rating from "./Rating";
import Image from "next/image";

const Clothing = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <div className={styles.Clothing}>
            <div className={styles.Clothing__title}>
                <h2>Clothing</h2>
                <span>View All</span>
            </div>

            <Slider {...settings}>
                <div className={styles.Clothing__card} style={{width: 320}}>
                    <div className={styles.Clothing__card_imgWraper}>
                        <Image
                            alt="Image Alt"
                            src="/img4.jpg"
                            layout="fill"
                            objectFit="contain"
                        />
                        <span className={styles.Clothing__card__discount}>-20%</span>
                    </div>

                    <div className={styles.Clothing__card_info}>
                        <h3>Product Name</h3>
                        <small>Description lorem ipsum...</small>
                        <div className={styles.Clothing__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.Clothing__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            <br/>
                            <span>10.000,000 Դ</span>
                        </p>
                    </div>
                </div>
                <div className={styles.Clothing__card} style={{width: 250}}>
                    <div className={styles.Clothing__card_imgWraper}>
                        <Image
                            alt="Image Alt"
                            src="/run.jpg"
                            layout="fill"
                            objectFit="contain"
                        />
                        <span className={styles.Clothing__card__discount}>-20%</span>
                    </div>

                    <div className={styles.Clothing__card_info}>
                        <h3>Product Name</h3>
                        <small>Description lorem ipsum...</small>
                        <div className={styles.Clothing__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.Clothing__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            <br/>
                            <span>10.000,000 Դ</span>
                        </p>
                    </div>
                </div>
                <div className={styles.Clothing__card} style={{width: 300}}>
                    <div className={styles.Clothing__card_imgWraper}>
                        <Image
                            alt="Image Alt"
                            src="/img2.jpg"
                            layout="fill"
                            objectFit="contain"
                        />
                        <span className={styles.Clothing__card__discount}>-20%</span>
                    </div>

                    <div className={styles.Clothing__card_info}>
                        <h3>Product Name</h3>
                        <small>Description lorem ipsum...</small>
                        <div className={styles.Clothing__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.Clothing__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            <br/>
                            <span>10.000,000 Դ</span>
                        </p>
                    </div>
                </div>
                <div className={styles.Clothing__card} style={{width: 250}}>
                    <div className={styles.Clothing__card_imgWraper}>
                        <Image
                            alt="Image Alt"
                            src="/red.jpg"
                            layout="fill"
                            objectFit="contain"
                        />
                        <span className={styles.Clothing__card__discount}>-20%</span>
                    </div>

                    <div className={styles.Clothing__card_info}>
                        <h3>Product Name</h3>
                        <small>Description lorem ipsum...</small>
                        <div className={styles.Clothing__card__rating}>
                            <Rating/>
                            <span> 4.7 (230)</span>
                        </div>
                        <p className={styles.Clothing__card__info_sale}>
                            <del>20.000,000 Դ</del>
                            <br/>
                            <span>10.000,000 Դ</span>
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default Clothing