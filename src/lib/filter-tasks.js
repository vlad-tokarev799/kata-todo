export const filterTasks = (tasks, param) => {
  if (param === 'all') {
    return tasks;
  }
  if (param === 'completed') {
    return tasks.filter((task) => task.completed);
  }
  if (param === 'active') {
    return tasks.filter((task) => !task.completed);
  }
};
