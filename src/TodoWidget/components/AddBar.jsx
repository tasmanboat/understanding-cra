import { useState } from 'react';
import { useTodo } from '../services/todo-context';

export default function AddBar() {
  const { state, dispatch } = useTodo();
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  // console.log(`render AddBar`);

  return (
    <form>
      <input type="text" name="title" id="title" value={title}
        onChange={(e) => setTitle(e.currentTarget.value)} />

      <label> (completed? <input
        type="checkbox"
        name="isCompleted"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.currentTarget.checked)} />)
      </label>
      <input type='submit' value="Submit" onClick={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (title.trim()) {
            const _todo = { id: -1, title: title, isCompleted: isCompleted };
            dispatch({ type: 'addRecord', payload: _todo });
            setTitle('');
            setIsCompleted(false);
          }
        }
      } className='btn btn-ghost' />

      <pre>{state.records.length} in total</pre>
    </form>
  )
}
