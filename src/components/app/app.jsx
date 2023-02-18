import React from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer';

import './app.css';

const App = () => {
  // const [tasks, setTasks] = useState([]);
  // const [filter, setFilter] = useState('all');
  // const [filters, changeFilter] = useFilters();
  // const [todoCount, setTodoCount] = useState(0);
  // const [visibleTasks, setVisibleTasks] = useState([]);
  //
  // useEffect(() => {
  //   const activeTasks = tasks.filter((task) => !task.completed).length;
  //   setTodoCount(activeTasks);
  // }, [tasks]);
  //
  // useEffect(() => {
  //   setVisibleTasks(filterTasks(tasks, filter));
  // }, [tasks, filter]);
  //
  // const completeTaskHandler = (id) => {
  //   const newTasks = toggleProperty(tasks, id, 'completed');
  //   setTasks(newTasks);
  // };
  //
  // const deleteTaskHandler = (id) => {
  //   const newTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(newTasks);
  // };
  //
  // const editStartTaskHandler = (id) => {
  //   const newTasks = tasks.map((task) => ({
  //     ...task,
  //     editing: task.id === id,
  //   }));
  //
  //   setTasks(newTasks);
  // };
  //
  // const editEndTaskHandler = (value, id) => {
  //   const newTasks = tasks.map((task) => {
  //     return task.id !== id ? task : { ...task, editing: false, description: value };
  //   });
  //
  //   setTasks(newTasks);
  // };
  //
  // const onTaskCreate = (label) => {
  //   setTasks([createTask(label), ...tasks]);
  // };
  //
  // const onClearActive = () => {
  //   const newTasks = tasks.filter((task) => !task.completed);
  //
  //   setTasks(newTasks);
  // };
  //

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList />
      </section>
      <Footer />
    </section>
  );
};

export default App;
