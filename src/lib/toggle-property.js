export const toggleProperty = (arr, id, prop) => {
  const elIdx = arr.findIndex((el) => el.id === id);
  const el = arr[elIdx];

  const newEl = {
    ...el,
    [prop]: !el[prop],
  };

  return [...arr.slice(0, elIdx), newEl, ...arr.slice(elIdx + 1, arr.length)];
};
