import React, { useState } from "react";
import { Link } from "gatsby";

const Search = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toggle = () => setOpen(!open);

  const filtered = items
    .filter(item => item.title.toUpperCase().includes(search.toUpperCase()))
    .slice(0, 5); // hardcoded

  const onFilterChange = event => {
    setSearch(event.target.value);
    console.log("filter change", event.target.value);
  };

  return (
    <div className="dropdown">
      <input onClick={toggle} type="text" onChange={onFilterChange} />
      {open && (
        <ul className="dropdown-content">
          {filtered.map(item => (
            <li key={item.id}>
              <Link to={item.slug}>
                {item.title} - by {item.author}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
