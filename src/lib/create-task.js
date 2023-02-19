export const createTask = (label, id) => {
  return {
    description: label,
    createTime: Date.now(),
    completed: false,
    id,
  };
};
