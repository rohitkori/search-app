import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import UserCard from "@/components/card";

import styles from "@/styles/cards.module.css";

export default function Cards() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // fetch data from an API
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data))
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
