import { userConstants } from "./constants";
import { firestore } from 'firebase';



// To get All the user from Database
export const getRealtimeUsers = (uid) => {


    return async (dispatch) => {

        dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });

        const db = firestore();
        const unsubscribe = db.collection("users")
            .onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach(function (doc) {
                    // Get All the User except the user itself
                    if (doc.data().uid != uid) {
                        users.push(doc.data());
                    }
                });
                console.log(users);

                dispatch({
                    type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
                    payload: { users }
                });

            });

        return unsubscribe;

    }

}


// to update the meassges of users 

export const updateMessage = (msgObj) => {
    return async dispatch => {

        const db = firestore();
        // Add current Messages 
        db.collection('conversations')
            .add({
                ...msgObj,
                isView: false,
                createdAt: new Date()
            })
            .then((data) => {
                console.log(data)


            })
            .catch(error => {
                console.log(error)
            });

    }
}


// get Real Time Coversations 
export const getRealtimeConversations = (user) => {
    return async dispatch => {

        const db = firestore();
        db.collection('conversations')
            .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
            .orderBy('createdAt', 'asc')
            .onSnapshot((querySnapshot) => {

                const conversations = [];

                querySnapshot.forEach(doc => {
                    // the message can be sent from user1 or user2 as well 
                    if (
                        (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                        ||
                        (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
                    ) {
                        conversations.push(doc.data())
                    }


                });

                dispatch({
                    type: userConstants.GET_REALTIME_MESSAGES,
                    payload: { conversations }
                })

                console.log(conversations);
            })



    }
}










        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'