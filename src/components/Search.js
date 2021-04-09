import React, { useContext } from "react";
import { UserContext } from '../contexts/UserContext';

const Search = () => {

  const { onFilter } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-5">
      <div className="container-fluid d-flex justify-content-end">
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onFilter}
          />
          <button type="submit" className="btn btn-warning rounded-0">
            <i className="fas fa-times"></i>
          </button>
          <button type="submit" className="btn btn-secondary rounded-0">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Search;
