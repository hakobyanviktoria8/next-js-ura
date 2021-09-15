import React, {useState, useEffect, useCallback} from "react";
import NavBarBottom from "./NavBarBottom";
import NavBarTop from "./NavBarTop";

const Nav = () => {
    const [y, setY] = useState(0);
    const [show, setShow] = useState(true);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setShow(true)
                console.log("scrolling up");
            } else if (y < window.scrollY) {
                setShow(false)
                console.log("scrolling down");
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <>
            {/*navBarTop component*/}
            <NavBarTop show={show}/>

            {/*navBarBottom component*/}
            {show &&
            <NavBarBottom show={show}/>
            }
        </>
    );
};

export default Nav;