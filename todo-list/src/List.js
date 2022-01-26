import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function List({ items, editItem, removeItem }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="list">
            <p className="title">{title}</p>
            <div className="btn-group">
              <button
                type="button"
                className="btn-edit"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn-remove"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
