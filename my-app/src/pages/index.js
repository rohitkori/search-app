import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar";

// Import the CSS module
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      {/* <header className={styles.navbar}>
          <NavigationMenu>
              <NavigationMenuList className={styles.navMenuList}>
                  <NavigationMenuItem className={styles.navItem}>
                      <a href="/hello">hello</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={styles.navItem}>
                      <NavigationMenuTrigger className={styles.navTrigger}>Item Two</NavigationMenuTrigger>
                      <NavigationMenuContent className={styles.navContent}>
                          <NavigationMenuLink className={styles.navLink}>Link 3</NavigationMenuLink>
                          <NavigationMenuLink className={styles.navLink}>Link 4</NavigationMenuLink>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>
      </header> */}
      <Navbar />
      <div className={styles.container}>
    <Input type="email" placeholder="Email" />
    </div>
      </>
  );
}
