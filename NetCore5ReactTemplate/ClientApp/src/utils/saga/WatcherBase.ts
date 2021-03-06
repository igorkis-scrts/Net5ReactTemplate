import { put, takeEvery, takeLatest, throttle } from "@redux-saga/core/effects";
import { AppAction } from "../redux/AppAction";
import { WatchFunction } from "./WatchFunction";

export abstract class WatcherBase {
    public watchFunctions: WatchFunction[];

    protected constructor() {
        this.watchFunctions = [];
    }

    private getSagaWithCallbackAction(saga: (action: AppAction) => void): (action: AppAction) => void {
        return function* (action: AppAction) {
            yield saga(action);

            if (typeof action.callbackAction === "function") {
                yield put(action.callbackAction());
            }
        };
    }

    protected watchLatest(actionType: string, saga: (action: AppAction) => void): void {
        const sagaWithCallbackAction = this.getSagaWithCallbackAction(saga);
        this.watchFunctions.push(
           function* () {
               yield takeLatest(actionType, sagaWithCallbackAction);
           }
        );
    }

    protected watchEvery(actionType: string, saga: (action: AppAction) => void): void {
        const sagaWithCallbackAction = this.getSagaWithCallbackAction(saga);
        this.watchFunctions.push(
           function* () {
               yield takeEvery(actionType, sagaWithCallbackAction);
           }
        );
    }

    protected watchThrottle(
       actionType: string,
       saga: (action: AppAction) => void,
       throttleMilliseconds = 1000
    ): void {
        const sagaWithCallbackAction = this.getSagaWithCallbackAction(saga);
        this.watchFunctions.push(
           function* () {
               yield throttle(throttleMilliseconds, actionType, sagaWithCallbackAction);
           }
        );
    }
}
