import { useFilter } from '../services/filter-context';

export default function FilterBar() {
  const { filter, setFilter } = useFilter();
  return (
    <form className='flex gap-2'>
      <label>
        <input type="radio" name="filter" id="all" value="all"
          checked={filter === 'all'}
          onChange={(e) => setFilter(e.currentTarget.value)} />{' '}
        all
      </label>
      <label>
        <input type="radio" name="filter" id="notCompleted" value="notCompleted"
          checked={filter === 'notCompleted'}
          onChange={(e) => setFilter(e.currentTarget.value)} />{' '}
        not completed
      </label>
      <label>
        <input type="radio" name="filter" id="completed" value="completed"
          checked={filter === 'completed'}
          onChange={(e) => setFilter(e.currentTarget.value)} />{' '}
        completed
      </label>
    </form>
  )
}
