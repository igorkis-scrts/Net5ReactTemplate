import React, { FunctionComponent } from "react";

import { appUrls } from "@app/routing/appUrls";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Home } from "@material-ui/icons";

interface INavbarHomeLogoCallProps {
   redirect: (url: string) => void;
}

type Props = INavbarHomeLogoCallProps;

const NavbarHomeLogo: FunctionComponent<Props> = (props: Props) => {
   const { redirect } = props;

   const redirectToHome = () => {
      redirect(appUrls.rootPath);
   };

   return (
     <IconButton edge={"start"} onClick={redirectToHome} color={"inherit"}>
        <Home />
        <Typography variant={"h6"}>.NET 5 React Template</Typography>
     </IconButton>
   );
};

export { NavbarHomeLogo };