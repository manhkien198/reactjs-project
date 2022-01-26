import { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  }
  return [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditID(null);
      showAlert(true, "success", "Value changed");
    } else {
      showAlert(true, "success", "Item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "danger", "Empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditID(id);
    setIsEditing(true);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>Grocery-Bud</h3>
        <div className="form-control">
          <input
            placeholder="tu đu nít"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn-submit">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} editItem={editItem} removeItem={removeItem} />
          <button className="btn-clear" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
