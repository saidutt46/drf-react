import React, { Fragment } from 'react';
import UserForm from './UserForm';
import Users from './Users';

export default function Dashboard() {
    return (
        <Fragment>
            <UserForm />
            <Users />
        </Fragment>
    )
}
