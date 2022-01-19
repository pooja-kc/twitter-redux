import * as actions from "./actionTypes";

let lastId = 0;
let lastId_ = 0;
let tweets = [];
let current_user = [];
const initialState = [];

export default function reducer(state = initialState, action) {
  if (action.type === actions.USER_SIGNED_UP)
    return [
      ...state,
      {
        user: { ...action.payload.description, isLogged: true, id: ++lastId },
      },
    ];
  return state;
}
export function reducer2(state = tweets, action) {
  if (action.type === actions.ADDED_TWEET) {
    return [
      ...state,
      {
        tweet: { ...action.payload.tweet, id: ++lastId_ },
      },
    ];
  }
  if (action.type === actions.REMOVED_TWEET) {
    return state.filter((tweet) => tweet.tweet.id !== action.payload.id.id);
  }
  return state;
}
export function currentUser(state = current_user, action) {
  if (action.type === actions.ADDED_CURRENT_USER) {
    return action.payload;
  }
  return state;
}
