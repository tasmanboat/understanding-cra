import { useTodo } from '../services/todo-context';
import { useFilter } from '../services/filter-context';
import TodoTableRow from './TodoTableRow';

export default function TodoTable() {
  const { state } = useTodo();
  const { filter } = useFilter();
  const todos = state.records;

  let filteredTodos = [];
  switch (filter) {
    case 'all':
      filteredTodos = todos;
      break;
    case 'completed':
      filteredTodos = todos.filter(todo => todo.isCompleted);
      break;
    case 'notCompleted':
      filteredTodos = todos.filter(todo => !todo.isCompleted);
      break;
    default:
      filteredTodos = todos;
      break;
  }

  return (
    <table className="table table-fixed w-full">
      <thead>
        <tr>
          <th className='id w-2'>Id</th>
          <th className='title w-24'>Title</th>
          <th className='isCompleted w-4'>✓</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredTodos.length > 0 && filteredTodos.map((todo, i) => {
            return <TodoTableRow key={i} todo={todo} />
          })
        }
      </tbody>
    </table>
  )
}
