import {call, put, select, takeEvery} from "redux-saga/effects";
import {createActionType, createApiActionCreators, createReducer, RequestActionTypes} from "../../redux/redux-helpers";
import {AppState} from "../../redux/store/models/AppState";
import {ExtendedAxiosResponse} from "../../redux/api-client";
import api from "./api";

/* STATE */
export interface DataState {
  data: any;
}

/* ACTION TYPES */
export enum ActionTypes {
  GetData = '@@GET_DATA',
}

/* ACTIONS */
export const getDataActions = createApiActionCreators(ActionTypes.GetData);

/* REDUCERS */
const initialState: DataState = {
  data: null,
};

export default createReducer(initialState, {
  [ActionTypes.GetData]: {
    [RequestActionTypes.SUCCESS]: (_state: any, payload: any) => payload,
    [RequestActionTypes.FAILURE]: (_state: any) => null,
  },
});

/* SELECTORS */
export const selectData = (state: AppState) => state.data;

/* SAGAS */
export function* getData({ payload: name }: any) {
  const resp: ExtendedAxiosResponse = yield call(api.getData, name);

  if (resp.ok) {
    yield put(
      getDataActions.success(resp.data)
    );
  } else {
    console.log('error handler');
  }
}

/* EXPORT */
export function* dataSaga() {
  yield takeEvery(createActionType(ActionTypes.GetData, RequestActionTypes.REQUEST), getData);
}
