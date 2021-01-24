import { Location } from "history";
import React, { FunctionComponent } from "react";

import { INavbarTab } from "@app/Layout/Navbar/INavbarTab";
import { NavbarTabButton } from "@app/Layout/Navbar/NavbarButton/NavbarTabButton";
import { NavbarHomeLogo } from "@app/Layout/Navbar/NavbarHomeLogo/NavbarHomeLogo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export interface INavbarProps {
   location: Location;
   tabs: INavbarTab[];
}

export interface INavbarCallProps {
   redirect: (url: string) => void;
}

type Props = INavbarProps & INavbarCallProps;

const Navbar: FunctionComponent<Props> = (props) => {
   const { location, tabs, redirect } = props;

   return (
     <AppBar position="static">
        <Toolbar>
           <NavbarHomeLogo redirect={redirect} />
           {tabs.map((tab) =>
             <NavbarTabButton
               key={tab.shortId}
               title={tab.title}
               url={tab.url}
               location={location}
               redirect={redirect}
             />
           )}
        </Toolbar>
     </AppBar>
   );
};

export { Navbar };
