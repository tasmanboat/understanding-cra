import { createContext, useContext, useReducer } from 'react';
import TODOS from './mock-todos';

const TodoContext = createContext();

const initialState = { records: TODOS };

function reducer(state, action) {
  switch (action.type) {

    case 'updateRecord': {
      const record = action.payload;
      for (let item of state.records) {
        if (item.id === record.id) {
          item.title = record.title;
          item.isCompleted = record.isCompleted;
          break;
        }
      }
      return {...state, records: [...state.records]};
    }

    case 'addRecord': {
      const record = action.payload;
      record.id = state.records.length + 1;
      return {...state, records: [...state.records, record]};
    }

    default:
      return state;

  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context;
}

export { TodoProvider, useTodo }
