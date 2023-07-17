import React from "react";

const List = ({ list, onDelete, onEdit, edit }) => {
  return (
    <div className="link-box">
      {list.map((item, index) => (
        <div className="user-data-box" key={item.link}>
          <div className="desc">
            <b>
              <i>{item.desc}</i>
            </b>
          </div>
          <div className="btn-group">
            <button className="view">
              <a
                href={item.link}
                style={{ all: "unset" }}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </button>
            <button className="edit" onClick={() => onEdit(index)}>
              Edit
            </button>
            <button
              className="delete"
              onClick={() => onDelete(item.link, index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;