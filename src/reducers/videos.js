import { FETCH_VID } from "../actions/videos";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_VID:
      console.log(action);
      return action.payload;
    default:
      return state;
  }

  return state;
}
