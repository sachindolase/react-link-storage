import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import "./index.css";
import Form from "./components/form";
import List from "./components/list";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else return [];
};

const App = () => {
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);
  const [editInd, setEditInd] = useState(-1);
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("chef");
    if (edit) {
      let tempList = [...list];
      tempList[editInd].desc = desc;
      tempList[editInd].link = link;
      setList(tempList);
      setEdit(false);
      setEditInd(-1);
    } else {
      const check = list.filter((item) => item.link === link);
      if (check.length) {
        alert("Do not add the same link twice");
      } else setList([...list, { desc: desc, link: link }]);
    }
    setShowBox(!showBox);
    setDesc("");
    setLink("");
  };

  const handleDelte = (links, index) => {
    if (!edit) {
      const arr = list.filter((item) => item.link !== links);
      setList(arr);
    }
  };

  const handleEdit = (ind) => {
    const obj = {
      desct: list[ind].desc,
      linkt: list[ind].link,
    };
    setDesc(obj.desct);
    setLink(obj.linkt);
    setEditInd(ind);
    if (showBox) setShowBox(!showBox);
    setEdit(true);
  };

  const handleHide = () => {
    setShowBox(!showBox);
    setDesc("");
    setLink("");
    setEdit(false);
  };

  return (
    <section className="main-box">
      {showBox && (
        <div className="functional-box">
          <button onClick={handleHide}>Add Link</button>
        </div>
      )}

      {!showBox && (
        <Form
          onHide={handleHide}
          onSubmit={handleSubmit}
          onDesc={desc}
          onSetDesc={setDesc}
          onSetLink={setLink}
          onLink={link}
        />
      )}

      {list.length > 0 ? (
        <List
          list={list}
          onDelete={handleDelte}
          onEdit={handleEdit}
          edit={edit}
        />
      ) : null}
      <Footer />
    </section>
  );
};

export default App;