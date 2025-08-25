import Carousel from "../Carousel/Carousel";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./Albums.module.css";

const Albums = ({ url, title }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, [url]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <h1 className={styles.heading}>{title}</h1>
        <button className={styles.button} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Collapse" : "Show All"}
        </button>
      </Box>

      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {!loading && collapsed ? (
        <Carousel items={data} renderItem={(data) => <Card item={data} />} uniqueId={title.replace(/\s+/g, "-")} />
      ) : (
        <Grid container spacing={2}>
          {data.map((cardItem, index) => (
            <Grid item xs key={index} sx={{ mx: "auto" }}>
              <Card item={cardItem} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Albums;
