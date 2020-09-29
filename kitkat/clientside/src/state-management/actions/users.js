import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_USERS, DELETE_USER, ADD_USER } from './types';
import { tokenConfig } from './auth';

// get users
export const getUsers = () => (dispatch, getState) => {
    axios.get('/api/users/', tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// delete users
export const deleteUser = (id) => (dispatch, getState) => {
    axios.delete(`/api/users/${id}/`, tokenConfig(getState)).then(res => {
        dispatch(createMessage({ userDeleted: 'Succesfully deleted user' }));
        dispatch({
            type: DELETE_USER,
            payload: id
        });
    }).catch(err => console.log(err));
};

// ADD user
export const addUser = (user) => (dispatch, getState) => {
    axios.post('/api/users/', user, tokenConfig(getState)).then(res => {
        dispatch(createMessage({ userAdded: `Successfully added user - ${user.name}` }));
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

