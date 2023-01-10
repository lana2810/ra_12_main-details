import { ajax } from "rxjs/ajax";
import { map, filter, mergeMap, catchError } from "rxjs/operators";
import {
  serviceRequest,
  serviceFailure,
  serviceSuccess,
} from "../slices/serviceSlice";
import {
  serviceListRequest,
  serviceListFailure,
  serviceListSuccess,
} from "../slices/serviceListSlice";
import { of } from "rxjs";

export const serviceEpic = (action$) =>
  action$.pipe(
    filter(serviceRequest.match),
    mergeMap((action) =>
      ajax
        .getJSON(`${process.env.REACT_APP_SERVICE_URL}/${action.payload}`)
        .pipe(
          map((response) => serviceSuccess(response)),
          catchError((error) => of(serviceFailure(error.message)))
        )
    )
  );
export const serviceListEpic = (action$) =>
  action$.pipe(
    filter(serviceListRequest.match),
    mergeMap(() =>
      ajax.getJSON(process.env.REACT_APP_SERVICE_URL).pipe(
        map((response) => serviceListSuccess(response)),
        catchError((error) => of(serviceListFailure(error.message)))
      )
    )
  );
