import * as actions from './actionTypes';

export function userLogged(description){
    return {
        type:actions.IS_LOGGED,
        payload:{
          discription: description,
        }
      }
}