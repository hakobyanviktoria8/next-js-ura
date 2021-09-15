import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";
import {Col, Container, Row} from "reactstrap";

const NavBarBottom = ({show}) => {
    return (
        <div className={styles.NavBarBottom}
            style={{"position" : show ? "fixed" : "inherit"}}
        >
            <Container fluid={true} className={styles.NavBarBottom__ContainerFluid}>
                <Row>
                    <Col className={styles.NavBarBottom__col} lg="12">
                        <Link href="/price-it">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Price It</span>
                            </a>
                        </Link>
                        <Link href="/basket">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Basket</span>
                            </a>
                        </Link>
                        <Link href="/wishlist">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Wishlist</span>
                            </a>
                        </Link>
                        <Link href="/last-item">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Last Item</span>
                            </a>
                        </Link>
                        <Link href="/notifications">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Notifications</span>
                            </a>
                        </Link>
                        <Link href="/friends">
                            <a>
                                <p>22</p>
                                <Image src="/icn.svg"
                                       height={24}
                                       width={24}
                                       alt="icn"
                                />
                                <span>Friends</span>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NavBarBottom