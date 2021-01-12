import { AppProvider, IAppProviderCallProps, IAppProviderProps } from "@config/components/AppProvider/AppProvider";
import { AppProviderActions } from "@config/components/AppProvider/redux/AppProvider.actions";
import { ComponentType } from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import { State } from "@State";

const mapStateToProps = (state: State): IAppProviderProps => {
    return {
        appIsInitialized: state.appProviderStore.initialized,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IAppProviderCallProps => {
    return {
        initialize: () => dispatch(AppProviderActions.initializedApp()),
    };
};

const AppProviderContainer: ComponentType = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppProvider);

export { AppProviderContainer };
