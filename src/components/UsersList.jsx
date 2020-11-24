import React from 'react';

const UsersList = ({ users }) => (
  <ul className="users__list">
    {
      users.map(user => 
        <li
          className="users__item ui vertical segment"
          key={user.id}
        >
          <div className="users__block">
            <p className="users__name">{`Name - ${user.name} ${user.surname}`}</p>
            <p className="users__desc">{user.desc}</p>
          </div>
        </li>
      )
    }
  </ul>
)

export default UsersList;