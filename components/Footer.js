import React from "react";
import styles from '../styles/Footer.module.css'
import {Container, Row, Col} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className={styles.FooterWraper}>
            <Container fluid={true} className={styles.footer__ContainerFluid}>
                <Row className={styles.footer__Row}>
                    <Col lg={3}>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/logo.svg"
                                    height={45}
                                    width={70}
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        <div>
                            <button className={styles.footer__forPartners}>For Partners</button>
                            <button className={styles.footer__joinUraaa}>Join Uraaa</button>
                        </div>
                    </Col>
                    <Col lg={3} className={"pl-5"}>
                        <h3>What is Uraaa ?</h3>
                        <h3>Mobile App & Website</h3>
                        <h3>Web Extension</h3>
                        <div className={styles.footer__brouser}>
                            <h3>
                                <Image
                                    src="/chrome.png"
                                    height={24}
                                    width={24}
                                    alt="chrome"
                                />
                                Chrome
                            </h3>
                            <h3>
                                <Image
                                    src="/Safari.png"
                                    height={24}
                                    width={24}
                                    alt="safari"
                                />
                                Safari
                            </h3>
                        </div>
                    </Col>
                    <Col lg={2} className={"pl-5"}>
                        <h3>Barcode Scan</h3>
                        <h3>Benefits</h3>
                        <h3>What’s New ?</h3>
                    </Col>
                    <Col lg={2} className={"pl-5"}>
                        <h3>FAQ</h3>
                        <h3>Contacts</h3>
                        <h3>Privacy Policy</h3>
                    </Col>
                    <Col lg={2} className={"text-right"}>
                        <h3>Uraaa! Mobile APP:</h3>
                        <h3>
                            <Image
                                src="/Group3519.png"
                                height={40}
                                width={135}
                                alt="safari"
                            />
                        </h3>
                        <h3>
                            <Image
                                src="/Group3520.png"
                                height={40}
                                width={135}
                                alt="safari"
                            />
                        </h3>
                    </Col>
                </Row>
                <Row className={styles.footer__bottom}>
                    <Col lg={6}>
                        <span>© Uraaa 2021: All rights recerved</span>
                    </Col>
                    <Col lg={6} className={styles.footer__bottom_right}>
                        <span>Follow us: </span>
                        <FacebookIcon/>
                        <InstagramIcon/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer