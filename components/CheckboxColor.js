import React, {useState} from 'react';
import styles from '../styles/Categories.module.css'

export default function CheckboxColor() {
    const [check, setCheck] = useState(false);

    const handleClick = (e) => {
        const el = e.target;
        el.style.color = check ? "#FF7E27" : "#272744";
        setCheck(!check);
        console.log(check)
    }

    return (
        <div>
            <div className={styles.CheckboxColor_row}>
                <span> </span>
                <span onClick={handleClick}>White</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.PurpleBerry}> </span>
                <span onClick={handleClick}>Purple-Berry</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.Orange}> </span>
                <span onClick={handleClick}>Orange</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.Teal}> </span>
                <span onClick={handleClick}>Teal</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.PinkLorem}> </span>
                <span onClick={handleClick}>Pink-Lorem</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.Black}> </span>
                <span onClick={handleClick}>Black</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.Red}> </span>
                <span onClick={handleClick}>Red</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.Yellow}> </span>
                <span onClick={handleClick}>Yellow</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.TealLorem}> </span>
                <span onClick={handleClick}>Teal-Lorem</span>
            </div>
            <div className={styles.CheckboxColor_row}>
                <span className={styles.PinkIpsum}> </span>
                <span onClick={handleClick}>Pink-Ipsum</span>
            </div>
        </div>
    );
}