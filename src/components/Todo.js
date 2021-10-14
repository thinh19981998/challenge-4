import React from 'react';

function Todo({
  name,
  id,
  completed,
  toggleTaskCompleted,
  deleteTask,
  filter,
}) {
  return (
    <li className='todo'>
      <div className='todo__input'>
        <input
          id={id}
          type='checkbox'
          className='todo__checkbox'
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label
          className={`todo__label ${completed ? 'strike' : ''}`}
          htmlFor={id}
        >
          {name}
        </label>
      </div>
      {filter === 'Completed' && (
        <button className='remove-btn' onClick={() => deleteTask(id)}>
        <span class="material-icons">delete_outline</span>
//           <span className='material-icons'>&#xE872;</span>
        </button>
      )}
    </li>
  );
}

export default Todo;
