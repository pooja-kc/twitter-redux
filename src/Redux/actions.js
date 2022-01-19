import * as actions from "./actionTypes";

export function userSignedUp(description) {
  return {
    type: actions.USER_SIGNED_UP,
    payload: {
      description: description,
    },
  };
}
export function addTweet(tweet) {
  return {
    type: actions.ADDED_TWEET,
    payload: {
      tweet: tweet,
    },
  };
}
export function removeTweet(id) {
  return {
    type: actions.REMOVED_TWEET,
    payload: {
      id,
    },
  };
}
export function addedCurrentUser(user) {
  return {
    type: actions.ADDED_CURRENT_USER,
    payload: {
      user,
    },
  };
}
