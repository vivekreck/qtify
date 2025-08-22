import Card from "../Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./Section.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

function Section() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setData(response?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <section>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <h1 className={styles.heading}>Top Albums</h1>
        <button className={styles.button}>Collapse</button>
      </Box>
      <Grid container spacing={2}>
        {data.map((cardItem, index) => (
          <Grid item xs key={index} sx={{ mx: "auto" }}>
            <Card item={cardItem} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Section;
