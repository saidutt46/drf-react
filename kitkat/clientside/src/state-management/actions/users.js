import axios from 'axios';
import { GET_USERS, DELETE_USER, ADD_USER } from './types';

// get users
export const getUsers = () => dispatch => {
    axios.get('/api/users/').then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// delete users
export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/users/${id}/`).then(res => {
        dispatch({
            type: DELETE_USER,
            payload: id
        });
    }).catch(err => console.log(err));
};

// ADD user
export const addUser = (user) => dispatch => {
    console.log(user);
    axios.post('/api/users/', user).then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

