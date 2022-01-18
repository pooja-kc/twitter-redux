import * as actions from './actionTypes'

let lastId=0;

export default function reducer(state = [], action){
    if(action.type === actions.IS_LOGGED)
    return[
        ...state,
        {
            isLogged:true,
            id: ++lastId,
            discription: action.payload.discription,
        }
    ];
    return state;
}