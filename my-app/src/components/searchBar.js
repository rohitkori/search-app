import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

// Import the CSS module
import styles from "@/styles/searchBar.module.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading
    console.log("Search Query:", searchQuery);
    // You can redirect or perform any action based on the search query
    router.push(`/user/${searchQuery}`);
  };

  return (
    <form className={styles.searchBarContainer} onSubmit={handleSearchSubmit}>
      <Search className={styles.searchIcon} />
      <Input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}
