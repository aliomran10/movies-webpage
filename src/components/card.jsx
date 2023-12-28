import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  return (
    <Card sx={{ maxWidth: 400 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="520"
          image={imgPath + props.poster_path}
          alt={props.title}
        />
        <CardContent className="cardContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="Typography"
          >
            <b>{props.title}</b>
          </Typography>
          <Typography variant="body2">{props.overview}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardActions">
        <Link to={`/details/${props.id}`} style={{ alignSelf: "end" }}>
          <Button
            size="small"
            className="Button"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            See more details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
