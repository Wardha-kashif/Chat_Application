import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers } from '../../actions/user.actions';
const HomePage = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    useEffect(() => {

        dispatch(getRealtimeUsers(auth.uid))

    }, []);
    return (
        <Layout>
            <section className="container">
                <div className="listOfUsers">
                    {
                        user.users.length > 0 ?
                            user.users.map(user => {
                                return (
                                    <div key={user.uid}  className="displayName">
                                      
                                        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>
                                            <span style={{ fontWeight: 500 }}>{user.firstName} {user.lastName}</span>
                                       
                                            <span>online</span>
                                        </div>
                                    </div>
                                );
                            }) : null
                    }



                </div>
                <div className="chatArea">
                    <div className="chatHeader"> Wardha </div>
                    <div className="messageSections">

                        <div style={{ textAlign: 'left' }}>
                            <p className="messageStyle" >Hello User</p>
                        </div>

                    </div>
                    <div className="chatControls">
                        <textarea />
                        <button>Send</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default HomePage;