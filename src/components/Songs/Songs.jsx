import { useEffect, useState } from "react";

import axios from "axios";
import Box from "@mui/material/Box";

import BasicTabs from "./BasicTabs";
import styles from "./Songs.module.css";

const Songs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then((response) => {
        setLoading(false);
        setTabsData(response?.data?.data || []);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <h1 className={styles.heading}>Songs</h1>
      </Box>

      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {!loading && <BasicTabs tabsData={tabsData} />}
    </div>
  );
};

export default Songs;
