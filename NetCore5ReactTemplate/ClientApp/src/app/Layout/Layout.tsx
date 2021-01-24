import React, { FunctionComponent } from "react";
import {
   Grid,
   makeStyles
} from "@material-ui/core";

import { IAppTheme } from "@config/themes/IAppTheme";
import { NavbarContainer } from "@app/Layout/Navbar/Navbar.container";

const useStyles = makeStyles((theme: IAppTheme) => ({
     root: {
        height: "100%",
     },
     container: {
        backgroundColor: theme.colors.background,
        boxSizing: "border-box",
        minHeight: "100%",
        padding: 16
     },
  })
);

const Layout: FunctionComponent = ({ children }) => {
   const classes = useStyles({});

   return (
     <Grid container className={classes.root}>
        <NavbarContainer />
        <Grid item className={classes.container}>
           {children}
        </Grid>
     </Grid>
   );
};

export { Layout };
