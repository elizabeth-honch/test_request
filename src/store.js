import { createStore } from 'redux';

const initialState = {
  users: [],
}

const reducer = (state, action) => {
  switch(action.type){
    case 'show_users':
      return {
        ...state,
        users: action.payload.users
      }
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);