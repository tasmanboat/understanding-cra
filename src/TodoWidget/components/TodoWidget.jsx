import { TodoProvider } from '../services/todo-context';
import { FilterProvider } from '../services/filter-context';
import TodoTable from './TodoTable';
import FilterBar from './FilterBar';
import AddBar from './AddBar';

export default function TodoWidget() {
  return (
    <div className='bg-palebrown p-4'>
      <h2 className='text-4xl font-bold py-4'>TodoWidget</h2>
      <FilterProvider>
        <TodoProvider>

          <FilterBar />
          <TodoTable />
          <AddBar />

        </TodoProvider>
      </FilterProvider>
    </div>
  );
}
