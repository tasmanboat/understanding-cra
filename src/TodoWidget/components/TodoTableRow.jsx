import { useTodo } from '../services/todo-context';

export default function TodoTableRow({ todo }) {
  // console.log(`render TodoTableRow`);
  const { dispatch } = useTodo();
  const title = !todo.isCompleted ?
    todo.title :
    <span style={{textDecorationLine: 'line-through'}}>{todo.title}</span>;

  function onChangeCheckbox(e) {
    const _todo = {...todo, id: todo.id, title: todo.title, isCompleted: e.currentTarget.checked};
    dispatch({ type: 'updateRecord', payload: _todo });
  }

  function onBlurEditable(e) {
    const _todo = {...todo, id: todo.id, title: e.currentTarget.textContent, isCompleted: todo.isCompleted};
    dispatch({ type: 'updateRecord', payload: _todo });
  }

  return (
    <tr>
      <td className='id w-2'>{todo.id}</td>
      <td className='title w-24'><span contentEditable='true' onBlur={onBlurEditable} suppressContentEditableWarning={true}>{title}</span></td>
      <td className='isCompleted w-1'>
        <input
          type='checkbox'
          name='isCompleted'
          checked={todo.isCompleted}
          onChange={onChangeCheckbox} />
      </td>
    </tr>
  )

}
