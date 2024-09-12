import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <NavigationMenu className={styles.navMenu}>
          <NavigationMenuList className={styles.navMenuList}>
            <Image src="/Logo.svg" alt="Girman Logo" className={styles.navMenuItemImage} width={150} height={50} />
            <NavigationMenuItem className={styles.navMenuItem}>
              <NavigationMenuLink href="/" className={styles.navMenuItemLink}>SEARCH</NavigationMenuLink>
              <NavigationMenuLink href="/services" className={styles.navMenuItemLink}>WEBSITE</NavigationMenuLink>
              <NavigationMenuLink href="/about" className={styles.navMenuItemLink}>LINKEDIN</NavigationMenuLink>
              <NavigationMenuLink href="/contact" className={styles.navMenuItemLink}>CONTACT</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
