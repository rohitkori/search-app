import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import UserCard from "@/components/card";
import Navbar from "@/components/navbar";
import NoResult from "@/components/no-result";
import Image from "next/image";

import styles from "@/styles/cards.module.css";

export default function User() {
  const router = useRouter();
  const searchQuery = router.query.user;
  console.log("Search Query:", searchQuery);

  const [usersData, setUsersData] = useState([]);
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    // fetch data from an API
    fetch(`/api/getUsers?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        if (data.length === 0) {
          setIsNull(true);
        } else {
          setIsNull(false);
        }
        setUsersData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <div className={styles.cardsContainer}>
        {!isNull ? (
          <>
            {usersData.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        ) : (
            <><NoResult/></>
        )}
      </div>
    </>
  );
}
