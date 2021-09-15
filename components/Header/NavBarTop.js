import React, {useState} from "react";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import {
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown
} from "reactstrap";
import {Col, Container, Row} from "reactstrap";
import SignInLink from "./signInLink";

const NavBarTop = ({show}) => {
    //search button
    const [searchType, setSearchType] = useState("All")
    const [inputValue, setInputValue] = useState("")

    //flag
    const [flag, setFlag] = useState("English")
    const imgFlag = `/${flag}.svg`;

    //bottom nav bar when scrolling 70px down
    const [bottomNav, setBottomNav] = useState("")

    //update search type and value
    const handleChangeSearchType = (e) => {
        setSearchType(e.currentTarget.textContent)
    }
    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        console.log("searchType - ", searchType);
        console.log("inputValue - ", inputValue);
    }
    const handleChangeLanguage = (e) => {
        setFlag(e.currentTarget.textContent);
    }
    const handleSubmitLanguage = (e) => {
        e.preventDefault();
    }

    const handleChangeBottomNav = (e) => {
        setBottomNav(e.target.value)
        console.log("BottomNav - ", bottomNav);
    }
    const handleSubmitBottomNav = (e) => {
        e.preventDefault();
    }

    //search All dropdown
    const [dropdownSearch, setDropdownSearch] = useState(false);
    const toggleSearch = () => setDropdownSearch(!dropdownSearch);

    // nav bar language drop down
    const [dropdownLanguage, setDropdownLanguage] = useState(false);
    const toggleLanguage = () => setDropdownLanguage(prevState => !prevState);

    // nav bar bottom 70px scrol down
    const [dropdownOpenNavBar, setDropdownOpenNavBar] = useState(false);
    const toggleNavBar = () => setDropdownOpenNavBar(prevState => !prevState);

    return (
        <>
            <nav className={styles.navBarTop} style={{"height": show ? "74px" : "54px"}}>
                <Container  fluid={true} className={styles.navBarTop__ContainerFluid}>
                    <Row className={styles.navBarTop__div}>

                        {/*Nav Bar Top categories, left menu*/}
                        <Col lg="1">
                            <Link href="/categories">
                                <a>
                                    <Image
                                        src="/hamburger.svg"
                                        height={25}
                                        width={25}
                                        alt="categories"
                                    />
                                </a>
                            </Link>
                        </Col>

                        {/*Nav Bar Top logo, home page*/}
                        <Col lg="1" className={"p-0"}>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/logo.svg"
                                        height={show ? 45 : 35}
                                        width={70}
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </Col>

                        {/*Nav Bar Top search input with search `All` dropdown filter*/}
                        <Col lg="6">
                            <div className={styles.navBarTop__search}>
                                <InputGroup>
                                    <InputGroupButtonDropdown addonType="append"
                                                              isOpen={dropdownSearch}
                                                              toggle={toggleSearch}>
                                        <DropdownToggle caret
                                                        className={styles.navBarTop__searchType}
                                        >
                                            {searchType}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={handleChangeSearchType}>All</DropdownItem>
                                            <DropdownItem onClick={handleChangeSearchType}>One</DropdownItem>
                                            <DropdownItem onClick={handleChangeSearchType}>Two</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                    <Input
                                        style={{"height": show ? "46px" : "36px"}}
                                           value={inputValue}
                                           onChange={handleChangeInputValue}
                                           placeholder="Search"
                                           className={styles.navBarTop__searchInput}
                                    />
                                    <InputGroupAddon addonType="prepend">
                                        <Button onClick={handleSubmitSearch}
                                                className={styles.navBarTop__searchButton}
                                        >
                                            <Image
                                                src="/search.svg"
                                                height={show ? 24 : 20}
                                                width={24}
                                                alt="search"
                                            />
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </Col>

                        {/*Nav Bar Top language, flag and text*/}
                        <Col lg={show ? "2" : "1"}>
                            <div className={styles.navBarTop__lang}>
                                <div className={styles.navBarTop__lang__flag}>
                                    <Image
                                        src={imgFlag}
                                        height={32}
                                        width={32}
                                        alt="lang_flag"
                                    />
                                </div>
                                <Dropdown isOpen={dropdownLanguage}
                                          toggle={toggleLanguage}
                                          className={styles.navBarTop__lang__text}
                                >
                                    <DropdownToggle caret
                                                    style={{"padding": show ? "" : "0 0 0 10px"}}
                                    >
                                        {show ? flag : ""}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={handleChangeLanguage}>English</DropdownItem>
                                        <DropdownItem onClick={handleChangeLanguage}>Russian</DropdownItem>
                                        <DropdownItem onClick={handleChangeLanguage}>Armenian</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>

                        {/*Nav Bar Top SignInLink component here*/}
                        <Col lg={show ? "2" : "3"} className={styles.navBarTop__lastCol}>
                            <SignInLink show={show}/>

                            {/*NavBarBottom dropdown menu after 70px scroll*/}
                            {!show &&
                            <div className={styles.navBarTop__dropdown}>
                                <span>68</span>
                                <Dropdown isOpen={dropdownOpenNavBar}
                                          toggle={toggleNavBar}>
                                    <DropdownToggle caret className={styles.navBarTop__dropdown_button}>{""}
                                    </DropdownToggle>
                                    <DropdownMenu className={styles.navBarTop__dropdown_bottom} right>
                                        <DropdownItem>
                                            <Link href="/price-it">
                                                <a className="first-child">
                                                    <p>22</p>
                                                    <Image src="/icn.svg"
                                                           height={24}
                                                           width={24}
                                                           alt="icn"
                                                    />
                                                    <span>Price It</span>
                                                </a>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
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
                                        </DropdownItem>
                                        <DropdownItem>
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
                                        </DropdownItem>
                                        <DropdownItem>
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
                                        </DropdownItem>
                                        <DropdownItem>
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
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/friends">
                                                <a className="last-child">
                                                    <p></p>
                                                    <Image src="/icn.svg"
                                                           height={24}
                                                           width={24}
                                                           alt="icn"
                                                    />
                                                    <span>Friends</span>
                                                </a>
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
};

export default NavBarTop