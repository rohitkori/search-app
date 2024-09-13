import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import SearchBar from "./searchBar";

import styles from "@/styles/navbar.module.css";

export default function Navbar({isHomepage}) {
  return (
    <>
      <header className={styles.navbar}>
        <NavigationMenu className={styles.navMenu}>
          <NavigationMenuList className={styles.navMenuList}>
            <a href="/">
            <Image src="/Logo.svg" alt="Girman Logo" className={styles.navMenuItemImage} width={150} height={50} />
            </a>
            {isHomepage ? (<NavigationMenuItem className={styles.navMenuItem}>
              <NavigationMenuLink href="/" className={styles.navMenuItemLink}>SEARCH</NavigationMenuLink>
              <NavigationMenuLink href="https://girmantech.com" className={styles.navMenuItemLink}>WEBSITE</NavigationMenuLink>
              <NavigationMenuLink href="https://www.linkedin.com/company/girmantech/posts/?feedView=all" className={styles.navMenuItemLink}>LINKEDIN</NavigationMenuLink>
              <NavigationMenuLink href="mailto:contact@girmantech.com" className={styles.navMenuItemLink}>CONTACT</NavigationMenuLink>
            </NavigationMenuItem>): (<SearchBar />)}
            
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
