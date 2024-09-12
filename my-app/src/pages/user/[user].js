import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import API_URL from "@/components/config";

import UserCard from "@/components/card";
import Navbar from "@/components/navbar";

import styles from "@/styles/cards.module.css";

export default function User() {
  const router = useRouter();
  const searchQuery = router.query.user;
  console.log("Search Query:", searchQuery);

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // fetch data from an API
    fetch(`${API_URL}/api/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        const filteredUsers = data.filter(
          (user) =>
            user.first_name === searchQuery ||
            user.last_name === searchQuery ||
            user.city === searchQuery ||
            user.contact_number === searchQuery
        );
        console.log("Filtered Users:", filteredUsers);
        setUsersData(filteredUsers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.cardsContainer}>
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
