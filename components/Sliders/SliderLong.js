import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

const SliderLong = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.SliderLong}>
            <Slider {...settings}>
                <div>
                    <Image
                        src="/Slide1.svg"
                        alt="slider"
                        height={100}
                        width={100}
                    />
                </div>
                <div>
                    <Image
                        src="/Slide1.svg"
                        height={100}
                        width={100}
                        alt="slider"
                    />
                </div>
                <div>
                    <Image
                        src="/Slide1.svg"
                        height={100}
                        width={100}
                        alt="slider"
                    />
                </div>
            </Slider>
        </div>
    )
}
export default SliderLong