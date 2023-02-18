import React from 'react';

const EditField = (props) => {
  const { onEditEnd, editing, label, onTaskEdit, id } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onEditEnd(label, id);
  };

  if (editing) {
    return (
      <form onSubmit={onSubmitHandler}>
        <input type="text" className="edit" value={label} onChange={onTaskEdit} autoFocus />
      </form>
    );
  }

  return null;
};

export default EditField;
