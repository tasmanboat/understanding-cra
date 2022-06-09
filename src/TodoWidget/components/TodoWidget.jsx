import { TodoProvider } from '../services/todo-context';
import { FilterProvider } from '../services/filter-context';
import TodoTable from './TodoTable';
import FilterBar from './FilterBar';
import AddBar from './AddBar';

export default function TodoWidget() {
  return (
    <div style={{
      backgroundColor: '#ebe1e1',
      padding: '1em',
    }}>
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
