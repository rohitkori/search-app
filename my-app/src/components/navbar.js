import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <NavigationMenu>
          <NavigationMenuList className={styles.navMenuList}>
            <NavigationMenuItem className={styles.navItem}>
              <a href="/">Home</a>
            </NavigationMenuItem>
            <NavigationMenuItem className={styles.navItem}>
              <a href="/cards">Cards</a>
              {/* <NavigationMenuTrigger className={styles.navTrigger}>
                Item Two
              </NavigationMenuTrigger>
              <NavigationMenuContent className={styles.navContent}>
                <NavigationMenuLink className={styles.navLink}>
                  Link 3
                </NavigationMenuLink>
                <NavigationMenuLink className={styles.navLink}>
                  Link 4
                </NavigationMenuLink>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
