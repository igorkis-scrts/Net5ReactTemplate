import { IAppTheme } from "@config/themes/IAppTheme";
import { makeStyles } from "@material-ui/styles";
import React, { FunctionComponent } from "react";
import { Location } from "history";
import { useLocation } from "react-router-dom";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: IAppTheme) => ({
   active: {
      backgroundColor: theme.colors.default.hover
   }
}));


interface INavbarTabButtonProps {
   location: Location;
   title: string;
   url: string;
}

interface INavbarTabButtonCallProps {
   redirect: (url: string) => void;
}

type Props = INavbarTabButtonProps & INavbarTabButtonCallProps;

const NavbarTabButton: FunctionComponent<Props> = (props: Props) => {
   const {
      title,
      url,

      redirect
   } = props;

   const classes = useStyles({});
   const currentPath = useLocation().pathname;
   const isActive = currentPath === url;

   const handleRedirect = () => {
      if (!isActive) {
         redirect(url);
      }
   };

   return (
     <Grid item>
        <Button color="inherit" onClick={handleRedirect} className={isActive ? classes.active : ""}>
           {title}
        </Button>
     </Grid>
   );
};

export { NavbarTabButton };