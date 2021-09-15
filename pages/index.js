import React from "react";
import Seo from "../components/seo";
import {fetchAPI} from "../lib/api";
import {Col, Container, Row} from "reactstrap";
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";

//slide configuration and slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLong from "../components/Sliders/SliderLong";
import BestDeals from "../components/Sliders/BestDeals";
import CategoriesComp from "../components/Sliders/CategoriesComp";
import Clothing from "../components/Sliders/Clothing";
import TopSellers from "../components/Sliders/TopSellers";
import Brands from "../components/Sliders/Brands";
import Toys from "../components/Sliders/Toys";
import Shoes from "../components/Sliders/Shoes";

const Home = ({homepage}) => {
    const seo = {
        metaTitle: "Home page",
        metaDescription: "Home page Description",
        article: true,
    };

    return (
        <Layout>
            <Seo seo={seo}/>
            <Container className={styles.Home__ContainerFluid} fluid={true}>
                {/*SliderLong*/}
                <Row>
                    <Col>
                        <SliderLong/>
                    </Col>
                </Row>

                {/*BestDeals*/}
                <Row>
                    <Col>
                        <BestDeals/>
                    </Col>
                </Row>

                {/*CategoriesComp*/}
                <Row>
                    <Col>
                        <CategoriesComp/>
                    </Col>
                </Row>

                {/*Clothing*/}
                <Row>
                    <Col>
                        <Clothing/>
                    </Col>
                </Row>

                {/*Brands*/}
                <Row>
                    <Col>
                        <Brands/>
                    </Col>
                </Row>

                {/*TopSellers*/}
                <Row>
                    <Col>
                        <TopSellers/>
                    </Col>
                </Row>

                {/*Toys*/}
                <Row>
                    <Col>
                        <Toys/>
                    </Col>
                </Row>

                {/*Shoes*/}
                <Row>
                    <Col>
                        <Shoes/>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    // Run API calls in parallel
    const homepage = await (fetchAPI("/homepage"));

    return {
        props: {homepage},
        revalidate: 1,
    };
}

export default Home;

