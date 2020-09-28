import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_USERS, DELETE_USER, ADD_USER } from './types';

// get users
export const getUsers = () => dispatch => {
    axios.get('/api/users/').then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// delete users
export const deleteUser = (id) => dispatch => {
    axios.delete(`/api/users/${id}/`).then(res => {
        dispatch(createMessage({ userDeleted: 'Succesfully deleted user' }));
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
        dispatch(createMessage({ userAdded: `Successfully added user - ${user.name}` }));
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

