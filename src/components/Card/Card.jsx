import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css";

export default function CustomCard({ item }) {
  return (
    <div className={styles.card}>
      <Card sx={{ width: 200, borderRadius: 3, boxShadow: 4 }}>
        <CardMedia component="img" height={240} image={item.image} alt="Sample Image" sx={{ objectFit: "cover" }} />
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "var(--color-black)",
              borderRadius: "12px",
              "&:hover": { backgroundColor: "var(--color-black)" },
              textTransform: "none",
            }}
          >
            {item.follows} Follows
          </Button>
        </CardActions>
      </Card>
      <Typography gutterBottom variant="h6" component="div">
        {item.title}
      </Typography>
    </div>
  );
}
