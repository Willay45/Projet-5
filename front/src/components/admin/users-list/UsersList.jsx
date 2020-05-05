import React, { useState, useEffect } from 'react';
import SlideBarAdmin from '../slidebar-admin/SlideBarAdmin';
import './UsersList.scss';
import { getUser } from '../../../api/Api';

const UsersList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    (async () => {
      setUsers(await getUser());
    })();
  }, []);

  return (
    <div>
      <SlideBarAdmin />
      <div className="table-users-list-page">
        <h1>Users List</h1>
        <div className="table-users-list">
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>City</td>
                <td>E-mail</td>
                <td>Rule</td>
              </tr>
            </thead>
            <tbody>
              {users
                ? users.map(user => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.address}</td>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
