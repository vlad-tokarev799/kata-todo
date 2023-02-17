let lastId = 100;

export const createTask = (label) => {
  return {
    description: label,
    createTime: new Date(),
    completed: false,
    editing: false,
    id: lastId++,
  };
};
