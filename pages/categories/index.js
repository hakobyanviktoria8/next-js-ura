import React from "react";
import styles from '../../styles/Categories.module.css'
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {Col, Container, Row} from "reactstrap";
import Rating from "../../components/Sliders/Rating";
import Image from "next/image";
import RangeSlider from "../../components/Range";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {alpha, makeStyles} from '@material-ui/core/styles';
import CheckboxSize from "../../components/CheckboxSize";
import CheckboxColor from "../../components/CheckboxColor";
import BreadcrumbsComp from "../../components/Breadcrumbs";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Categories = () => {
    const seo = {
        metaTitle: "Categories",
        metaDescription: "CategoriesComp Description",
        article: true,
    };
    const classes = useStyles();

    return (
        <Layout>
            <Seo seo={seo}/>

            <Container fluid={true} className={styles.Categories__ContainerFluid}>
                <Row>
                    <Col lg="4" className={styles.Categories__ContainerFluid_Breadcrumb}>
                        <BreadcrumbsComp/>
                    </Col>
                    <Col lg="8" className={styles.Categories__ContainerFluid_SortBy}>
                        Stor By:
                        <div>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Image
                                src="/icnor.svg"
                                width={24}
                                height={24}
                            />
                            <span>Sale</span>
                        </div>
                        <div>
                            <Image
                                src="/icn.svg"
                                width={24}
                                height={24}
                            />
                            <span>Price</span>
                        </div>
                        <div>
                            <Image
                                src="/icn.svg"
                                width={24}
                                height={24}
                            />
                            <span>New</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg="3" className={styles.leftMenu}>
                        {/*left menu price*/}
                        <div className={styles.leftMenu__price}>
                            <div className={styles.leftMenu__price_title}>
                                <span>Price</span>
                                <span className={"text-right"}>-</span>
                            </div>
                            <div className={styles.leftMenu__price_inputs}>
                                <input type="text"/>
                                <input type="text"/>
                            </div>
                            <div className={styles.leftMenu__price_range}>
                                <RangeSlider/>
                            </div>
                        </div>

                        {/*left menu size*/}
                        <div className={styles.leftMenu__size}>
                            <div className={styles.leftMenu__size_title}>
                                <span>Size</span>
                                <span className={"text-right"}>-</span>
                            </div>

                            <div className={styles.leftMenu__size_search_wraper}>
                                <div className={styles.leftMenu__size_search}>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon/>
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{'aria-label': 'search'}}
                                        />
                                    </div>
                                </div>
                                <div className={styles.leftMenu__size_checkboxs}>
                                    <CheckboxSize/>
                                </div>
                            </div>
                        </div>

                        {/*left menu color*/}
                        <div className={styles.leftMenu__color}>
                            <div className={styles.leftMenu__color_title}>
                                <span>Color</span>
                                <span className={"text-right"}>-</span>
                            </div>
                            <CheckboxColor/>
                        </div>

                        {/*left menu brand*/}
                        <div className={styles.leftMenu__brand}>
                            <div className={styles.leftMenu__brand_title}>
                                <span>Brand</span>
                                <span className={"text-right"}>-</span>
                            </div>
                            <div className={styles.leftMenu__size_search_wraper}>
                                <div className={styles.leftMenu__size_search}>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon/>
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{'aria-label': 'search'}}
                                        />
                                    </div>
                                </div>
                                <div className={styles.leftMenu__size_checkboxs}>
                                    <CheckboxSize/>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/*right Menu*/}
                    <Col lg="9" className={styles.rightMenu}>
                        <Row>
                            <Col lg="3">
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/run.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/mountains.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img3.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img2.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img4.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img21.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/red.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/Slide2-3.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3">
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img5.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/img4.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.Categories__card}>
                                    <div className={styles.Categories__card_imgWraper}>
                                        <Image src="/Slide2-1.jpg"
                                               alt="post-thumbnail"
                                               layout="fill"
                                        />
                                        <span className={styles.Categories__card__discount}>-20%</span>
                                    </div>

                                    <div className={styles.Categories__card_info}>
                                        <h3>Product Name</h3>
                                        <small>Description lorem ipsum...</small>
                                        <div className={styles.Categories__card__rating}>
                                            <Rating/>
                                            <span> 4.7 (230)</span>
                                        </div>
                                        <p className={styles.Categories__card__info_sale}>
                                            <del>20.000,000 Դ</del>
                                            <br/>
                                            <span>10.000,000 Դ</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}
export default Categories