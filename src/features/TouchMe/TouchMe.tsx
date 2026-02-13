import Link from "next/link";

import styles from "./TouchMe.module.css";

export const TouchMe = () => {
    return(
        <div className={styles['TouchMe']}>
            <div className={styles['TouchMe-Info']}>
                <h3 className={styles['TouchMe-InfoTitle']}>Ready to start your next project?</h3>
                <Link  className={styles['TouchMe-InfoLink']} href="https://google.com">Get it touch me!</Link>
            </div>   
        </div>
    )
};