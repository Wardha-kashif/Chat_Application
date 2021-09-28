import { userConstants } from "../actions/constants"

const intiState = {
    users: [],
    
}

export default (state = intiState, action) => {

    switch(action.type){
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            break;
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        
        
    }


    return state;

}