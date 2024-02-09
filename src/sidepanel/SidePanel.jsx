import "./sidepanel.css";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SidePanel = () => {
  const [searchItem, setSearchItem] = useState("");

  const [users, setUsers] = useState([
    "Ammon Nii",
    "Alma Obaka",
    "Aaron Tetteh",
    "Abraham Quarshie",
    "Abel Adamson",
    "Anita Okumah-Boyd",
    "Abinadi SonofAbel",
    "Amulek SonofAlma",
  ]);

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="sidepanel-container">
      <div className="search-section">
        <input
          className="search-box"
          placeholder="Search..."
          type="text"
          value={searchItem}
          onChange={handleChange}
        />
        <IoMdSearch />
      </div>
      <div className="user-list-container">
        <ul className="user-list">
          {filteredUsers.map((user, index) => (
            <li className="user-list-item" key={index}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
