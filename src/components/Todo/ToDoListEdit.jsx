import React from "react";

function ToDoListEdit({
  editedTaskName,
  setEditedTaskName,
  handleSaveEdit,
  handleCancelEdit,
  index,
}) {
  return (
    <div>
      <input
        type="text"
        value={editedTaskName}
        onChange={(event) => setEditedTaskName(event.target.value)}
        className="edit-field"
      />
      <button onClick={() => handleSaveEdit(index)} className="save-button">
        Save Changes
      </button>
      <button onClick={handleCancelEdit} className="cancel-button">
        Cancel
      </button>
    </div>
  );
}

export default ToDoListEdit;
