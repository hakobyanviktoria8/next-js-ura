import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

const SignInLink = ({show}) => {
    const [signIn, setSignIn] = useState(false);

    const handleSignin = () => {
        setSignIn(!signIn);
    }

    return (
        <Link href="/signin">
            <a className={styles.profile} onClick={handleSignin}>
                {signIn ?
                    //if user sign in
                    <div className={styles.signin}>
                        <Image src="/Profile.svg"
                               height={show ? 25 : 20}
                               width={25}
                               alt="signin"
                               className={styles.signin__img}
                        />
                        <span className={show ? "" : styles.signin__span}>Lusine Hayrapetyan </span>
                    </div>
                    :
                    //user sign out
                    <div className={styles.signout}
                         style={{"height": show ? "46px" : "32px"}}
                    >
                        <Image src="/Profile.svg"
                               height={show ? 25 : 20}
                               width={25}
                               alt="signout"
                        />
                        <span>Sign In</span>
                    </div>
                }
            </a>
        </Link>
    )
};

export default SignInLink