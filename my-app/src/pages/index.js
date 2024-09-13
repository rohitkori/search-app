import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";


import Image from "next/image";

// Import the CSS module
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Navbar isHomepage={true} />
      <div className={styles.container}>
        <div className={styles.containerImage}>
        </div>
        <div className={styles.content}>
          <main className={styles.mainSection}>
            <div className={styles.logoSection}>
              <Image
                src="/Group 1.svg"
                alt="Girman Logo"
                width={500}
                height={500}
                className={styles.logo}
              />
              <Image
                src="/Girman.svg"
                alt="Girman SVG Logo"
                width={400}
                height={200}
                className={styles.logo}
              />
            </div>
          <SearchBar />
          </main>
        </div>
      </div>
    </>
  );
}
