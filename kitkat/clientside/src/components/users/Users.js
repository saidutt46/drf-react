import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, deleteUser } from '../../state-management/actions/users';

export class Users extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
                <Fragment>
                    <h2>Users</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.message}</td>
                                    <td>
                                        <button onClick={this.props.deleteUser.bind(this, user.id)} className="btn btn-danger btn-sm">{" "}Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
