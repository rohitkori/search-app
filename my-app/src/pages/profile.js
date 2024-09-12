import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Import the CSS module
import styles from "@/styles/profile.module.css";

export default function Profile() {
    return (
        <header className={styles.navbar}>
            <NavigationMenu>
                <NavigationMenuList className={styles.navMenuList}>
                    <NavigationMenuItem className={styles.navItem}>
                        <a href="/hello">hello</a>
                        {/* <NavigationMenuTrigger className={styles.navTrigger}>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent className={styles.navContent}>
                            <NavigationMenuLink className={styles.navLink}>Link 1</NavigationMenuLink>
                            <NavigationMenuLink className={styles.navLink}>Link 2</NavigationMenuLink>
                        </NavigationMenuContent> */}
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
        </header>
    );
}
