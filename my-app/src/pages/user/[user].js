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
    fetch(`${API_URL}/api/getUsers?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setUsersData(data);
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
