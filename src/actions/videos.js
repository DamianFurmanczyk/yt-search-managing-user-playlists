import axios from "axios";

import search from "youtube-search";

let API_KEY = "AIzaSyDHFzAEOzHn_62UGfc2-z0Gh9D9k5rUkaE";
var opts = {
  key: API_KEY
};

export const FETCH_VID = "fetch video";
export const SELECT_VIDEO = "select video";

export const fetchMovie = (query, maxResults = 10) => dispatch => {
  opts.maxResults = maxResults;
  console.log(query, maxResults);
  return search(query, opts, function(err, results) {
    if (err) return dispatch({ type: FETCH_VID, payload: err });
    dispatch({ type: FETCH_VID, payload: results });
  });
};

export function selectVideo(vid) {
  return {
    type: SELECT_VIDEO,
    payload: vid
  };
}
