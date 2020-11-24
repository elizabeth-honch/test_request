import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from 'react';
import Pagination from './components/Pagination/Pagination';
import UsersList from './components/UsersList';

export const App = () => {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const usersFromApi = async() => {
    const response = await fetch('/db.json');
    const result = await response.json();

    return result;
  }

  const showUsers = () => {
    setShow(show => !show);
    usersFromApi()
    .then(data => {
      dispatch(
        {
          type:'show_users',
          payload: {users: data}
        }
      )
    })
  }

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 className="ui block header">Users</h1>
      <button
        className="ui teal button"
        onClick={showUsers}
      >
        {
          show ? 'Hide Users' : 'Show Users'
        }
      </button>
      {
        show
        ? (
          <div className="users">
            <UsersList users={currentUsers} />

            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            />
        </div>
        )
        : <div className="ui raised segment">Click button to see users</div>
      }
    </div>
  )
}
