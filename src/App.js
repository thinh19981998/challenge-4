import { useEffect, useState } from 'react';
import './App.scss';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ data }) {
  const LOCAL_STORAGE_KEY = 'tasklist';
  const localData = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : data;
  const [tasks, setTasks] = useState(localData);
  const [filter, setFilter] = useState('All');
  // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        filter={filter}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    if (name.trim() !== '') {
      const newTask = { id: uuidv4(), name: name, completed: false };
      setTasks([...tasks, newTask]);
    }
  }

  const deleteAll = () => {
    const updatedTasks = tasks.filter((item) => item.completed === false);
    setTasks(updatedTasks);
  };

  const show =
    filter === 'Completed' &&
    tasks.filter((task) => task.completed === true).length > 0;

  return (
    <div className='container'>
      <h1>#todo</h1>
      <div className='btn-group'>{filterList}</div>
      {filter !== 'Completed' && <Form addTask={addTask} />}
      <ul className='todo-list'>{taskList}</ul>
      {show && (
        <button className='deleteAll-btn' onClick={deleteAll}>
          <span class='list-delete-text'>delete all</span>
          Delete All
        </button>
      )}
    </div>
  );
}

export default App;
