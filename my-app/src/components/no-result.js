import Image from 'next/image'

import styles from "@/styles/noResult.module.css";


export default function NoResult() {
    return (
        <div className={styles.mainContainer}>
            <Image src="/Group 143.svg" alt="Loading" width={400} height={400} />

        </div>
    )

}
