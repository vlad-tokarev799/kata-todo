let lastId = 100;

export const createTask = (label) => {
  return {
    description: label,
    createTime: Date.now(),
    completed: false,
    id: lastId++,
  };
};
