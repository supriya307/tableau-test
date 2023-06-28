import React from "react";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import renderIfNotNull from "../../utilities/render-if-not-null";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    display: "flex",
    margin: "3rem",
    transition: "all 0.4s ease-in-out",
    "@media (max-width: 758px)": {
      display: "flex",
      flexDirection: "column"
    },
    "&:hover": {
      transform: "scale(1.05,1.05)",
      zIndex: "2"
    }
  },
  media: {
    width: 500,
    height: 300
  },
  // ulist:{
  //   border: '1px solid',
  //   borderBottom: 'none',
  //   borderTop:'none',
  //   borderColor:'#7f7f7f'
  // },
  list: {
    listStyleType: "none"
  },
  cardContent: {
    width: "100%"
  },
  title: {
    color: "#3437eb",
    "&:hover":{
      textDecoration:'underline'
    }
  },
  description: {
    fontSize: "1.25rem"
  }
});

export default function MediaCard({ data }) {
  const classes = useStyles();

  return (
    <ul className={classes.ulist}>
      {data.map(
        ({ author, title, description, url, urlToImage, publishedAt }) => (
          <li key={Math.random()} className={classes.list}>
            <Card className={classes.root}>
              {renderIfNotNull(
                urlToImage,
                <CardMedia
                  className={classes.media}
                  image={urlToImage}
                  title={title}
                />
              )}
              <CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Link href={url}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {title}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </li>
        )
      )}
    </ul>
  );
}
