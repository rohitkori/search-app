import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import the CSS module
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <main className={styles.mainSection}>
            <div className={styles.logoSection}>
              <Image
                src="/Group 1.svg"
                alt="Girman Logo"
                width={100}
                height={50}
              />
              <Image
                src="/Girman.svg"
                alt="Girman SVG Logo"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.searchBarContainer}>
              <Search className={styles.searchIcon} />
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search..."
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
