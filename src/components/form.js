import React from "react";

const Form = ({ onSubmit, onSetDesc, onLink, onDesc, onSetLink, onHide }) => {
  return (
    <div className="form-div">
      <i className="fas fa-times special" onClick={onHide} />
      <form onSubmit={onSubmit}>
        <div className="items">
          <section>
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="e.g. google link"
              required
              value={onDesc}
              onChange={(e) => onSetDesc(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="">Link</label>
            <input
              type="text"
              placeholder="e.g. https://google.com"
              required
              value={onLink}
              onChange={(e) => onSetLink(e.target.value)}
            />
          </section>
          <button className="btn" type="submit">
            Click me to Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;