import React, { useState } from 'react';

function Form({ addTask }) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(name);
    setName('');
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input
        type='text'
        id='new-todo-input'
        className='input'
        name='text'
        autoComplete='off'
        placeholder='add details'
        value={name}
        onChange={handleChange}
      />
      <button type='submit' className='add-btn'>
        Add
      </button>
    </form>
  );
}

export default Form;
