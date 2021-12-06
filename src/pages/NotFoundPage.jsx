import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";
import { Link as LinkRouter } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Grid
        container
        className="full"
        direction="column"
        justifyContent="center"
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiRain />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h3">404 | La página no existe</Typography>
              <Link aria-label="menu" component={LinkRouter} to="/main">
                Volver al inicio
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default NotFoundPage;
