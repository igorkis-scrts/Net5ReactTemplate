import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Forecasts, IForecastsCallProps, IForecastsProps } from "@app/Forecasts/Forecasts";
import { ForecastsActions } from "@app/Forecasts/redux/Forecasts.actions";
import { State } from "@State";

const mapStateToProps = (state: State): IForecastsProps => {
   return {
      forecasts: state.forecastsStore.forecasts,
      forecastsAreLoading: state.forecastsStore.forecastsAreLoading
   };
};

const mapDispatchToProps = (dispatch: Dispatch): IForecastsCallProps => {
   return {
      getForecasts:
        () => dispatch(ForecastsActions.getForecasts()),
   };
};

const ForecastsContainer: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecasts);

export { ForecastsContainer };