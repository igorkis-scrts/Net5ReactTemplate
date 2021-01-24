import { INavbarTab } from "@app/Layout/Navbar/INavbarTab";
import { appUrls } from "@app/routing/appUrls";
import { State } from "@State";
import { push } from "connected-react-router";
import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { generate } from "shortid";

import {
   Navbar,
   INavbarProps,
   INavbarCallProps
} from "./Navbar";

const mapStateToProps = (state: State): INavbarProps => {
   const tabs: INavbarTab[] = [
      {
         shortId: generate(),
         title: "Home",
         url: appUrls.rootPath
      },
      {
         shortId: generate(),
         title: "Weather Forecasts",
         url: appUrls.fetchData
      }
   ];

   return {
      location: state.router.location,
      tabs: tabs
   };
};

const mapDispatchToProps = (dispatch: Dispatch): INavbarCallProps => {
   return {
      redirect: (url) => dispatch(push(url)),
   };
};

const NavbarContainer: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export { NavbarContainer };
