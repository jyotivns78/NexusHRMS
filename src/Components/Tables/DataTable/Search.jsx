import React from 'react';
// import "./Search.scss";

const Search = () => {
  return (
    <div class="input-group" style={ { width: "300px" } }>
    <div class="form-outline">
      <input type="search" id="form1" class="form-control" style={{ height: "35px" }} />
      <label class="form-label" for="form1" style={{ position: "absolute", top: "8px", left: "10px" }} >Search</label>
    </div>
    <button type="button" class="btn btn-primary" style={{ height: "35px" }}>
      <i class="fa fa-search" style={{ height: "40px" }}></i>
    </button>
  </div>
  )
}

export default Search